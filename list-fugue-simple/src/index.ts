import {
  AbstractCListCPrimitive,
  InitToken,
  Message,
  MessageMeta,
  Optional,
} from "@collabs/collabs";
import pako from "pako";

const GZIP = false;

interface ID {
  sender: string;
  counter: number;
}

interface Element<T> {
  /** For the start & end, this is ("", 0) & ("", 1). */
  id: ID;
  value: T | null;
  isDeleted: boolean;
  /** null for start and end. */
  leftOrigin: Element<T> | null;
  /** null for start and end. */
  rightOrigin: Element<T> | null;
  /** Linked list structure: the element currently to our left. */
  left: Element<T> | null;
  /** Linked list structure: the element currently to our right. */
  right: Element<T> | null;
}

interface ElementSave<T> {
  id: ID;
  value: T | null;
  isDeleted: boolean;
  leftOrigin: ID;
  rightOrigin: ID;
}

interface InsertMessage<T> {
  type: "insert";
  id: ID;
  value: T;
  leftOrigin: ID;
  rightOrigin: ID;
}

interface DeleteMessage {
  type: "delete";
  id: ID;
}

export class ListFugueSimple<T> extends AbstractCListCPrimitive<T, [T]> {
  private readonly start: Element<T>;
  private readonly end: Element<T>;

  private counter = 0;

  /**
   * Used in getByID.
   *
   * Map from ID.sender, to an array that maps ID.counter, to element with that ID.
   */
  private readonly elementsByID = new Map<string, Element<T>[]>();
  /** Cached length. */
  private _length = 0;

  constructor(init: InitToken) {
    super(init);

    this.start = {
      id: { sender: "", counter: 0 },
      value: null,
      isDeleted: true,
      leftOrigin: null,
      rightOrigin: null,
      left: null,
      right: null,
    };
    this.end = {
      id: { sender: "", counter: 1 },
      value: null,
      isDeleted: true,
      leftOrigin: null,
      rightOrigin: null,
      left: this.start,
      right: null,
    };
    this.start.right = this.end;
    this.elementsByID.set("", [this.start, this.end]);
  }

  insert(index: number, ...values: T[]): T | undefined {
    for (let i = 0; i < values.length; i++) {
      this.insertOne(index + i, values[i]);
    }

    // The return value is just an interface requirement; not relevant here.
    return undefined;
  }

  private insertOne(index: number, value: T) {
    // insert generator.
    const id = { sender: this.runtime.replicaID, counter: this.counter };
    this.counter++;
    const leftOrigin = index === 0 ? this.start : this.getByIndex(index - 1);
    const rightOrigin = leftOrigin.right!;
    const msg: InsertMessage<T> = {
      type: "insert",
      id,
      value,
      leftOrigin: leftOrigin.id,
      rightOrigin: rightOrigin.id,
    };
    // Message is delivered to receivePrimitive (the effector).
    super.sendPrimitive(JSON.stringify(msg));
  }

  delete(startIndex: number, count = 1): void {
    for (let i = 0; i < count; i++) this.deleteOne(startIndex);
  }

  private deleteOne(index: number): void {
    // delete generator.
    const elt = this.getByIndex(index);
    const msg: DeleteMessage = { type: "delete", id: elt.id };
    // Message is delivered to receivePrimitive (the effector).
    super.sendPrimitive(JSON.stringify(msg));
  }

  protected receivePrimitive(message: Message, meta: MessageMeta): void {
    const msg: InsertMessage<T> | DeleteMessage = JSON.parse(<string>message);
    switch (msg.type) {
      case "insert": {
        // insert effector
        const leftOrigin = this.getByID(msg.leftOrigin);
        const rightOrigin = this.getByID(msg.rightOrigin);
        const left = this.computeLeft(msg.id, leftOrigin, rightOrigin);

        // Insert a new elt into the linked last after left.
        const right = left.right!;
        const elt: Element<T> = {
          id: msg.id,
          value: msg.value,
          isDeleted: false,
          leftOrigin,
          rightOrigin,
          left,
          right,
        };
        left.right = elt;
        right.left = elt;

        // Add elt to elementsByID.
        let bySender = this.elementsByID.get(msg.id.sender);
        if (bySender === undefined) {
          bySender = [];
          this.elementsByID.set(msg.id.sender, bySender);
        }
        bySender.push(elt);

        this._length++;

        // In a production implementation, we would emit an Insert event here.
        break;
      }
      case "delete": {
        // delete effector
        const elt = this.getByID(msg.id);
        if (!elt.isDeleted) {
          elt.value = null;
          elt.isDeleted = true;
          this._length--;
          // In a production implementation, we would emit a Delete event here.
        }
        break;
      }
      default:
        throw new Error("Bad message: " + msg);
    }
  }

  private computeLeft(
    id: ID,
    leftOrigin: Element<T>,
    rightOrigin: Element<T>
  ): Element<T> {
    let rightOriginAdj = rightOrigin;
    if (rightOrigin.leftOrigin !== leftOrigin) {
      rightOriginAdj = this.end;
    }

    let left = leftOrigin;
    let scanning = false;

    // o ranges from leftOrigin to (non-adjusted) rightOrigin, *exclusive*.
    // Note that o will never be start or end (within the loop),
    // so its origins are non-null.
    for (let o = leftOrigin.right!; o !== rightOrigin; o = o.right!) {
      if (this.lessThan(o.leftOrigin!, leftOrigin)) break;
      else if (o.leftOrigin === leftOrigin) {
        let oRightOriginAdj = o.rightOrigin!;
        if (o.rightOrigin!.leftOrigin !== o.leftOrigin) {
          oRightOriginAdj = this.end;
        }

        if (this.lessThan(oRightOriginAdj, rightOriginAdj)) {
          scanning = true;
        } else if (oRightOriginAdj === rightOriginAdj) {
          if (id.sender < o.id.sender) break;
          else scanning = false;
        } else {
          // oRightOriginAdj > rightOriginAdj
          scanning = false;
        }
      }

      if (!scanning) left = o;
    }

    return left;
  }

  /**
   * Returns whether a < b in the linked list order.
   */
  private lessThan(a: Element<T>, b: Element<T>): boolean {
    if (a === b) return false;
    // Loop forwards from each of a & b in parallel until one finds the other.
    // In principle this takes O(n) time, but in practice a & b should usually
    // be close together.
    let afterA = a;
    let afterB = b;
    while (true) {
      if (afterA === b || afterB.right === null) return true;
      if (afterB === a || afterA.right === null) return false;
      afterA = afterA.right;
      afterB = afterB.right;
    }
  }

  private getByID(id: ID): Element<T> {
    const bySender = this.elementsByID.get(id.sender);
    if (bySender !== undefined) {
      const node = bySender[id.counter];
      if (node !== undefined) return node;
    }
    throw new Error("Unknown ID: " + JSON.stringify(id));
  }

  private getByIndex(index: number): Element<T> {
    if (index < 0 || index >= this.length) {
      throw new Error(
        "Index out of range: " + index + " (length: " + this.length + ")"
      );
    }

    // For now, do a slow linear search, but from the end b/c that's more common.
    // An easy common-case optimization is to cache index "hints" like in Yjs.
    // A doable aysmptotic optimization is to build a balanced tree structure
    // on top of the non-deleted list elements and use that to convert between
    // indices & elements in O(log(n)) time.
    let remaining = this.length - 1 - index;
    for (let elt = this.end.left!; elt !== this.start; elt = elt.left!) {
      if (!elt.isDeleted) {
        if (remaining === 0) return elt;
        remaining--;
      }
    }
    throw new Error("Index in range but not found");
  }

  get(index: number): T {
    return this.getByIndex(index).value!;
  }

  *values(): IterableIterator<T> {
    // Walk the linked list.
    for (
      let elt: Element<T> | null = this.start;
      (elt = elt.right);
      elt !== null
    ) {
      if (!elt.isDeleted) yield elt.value!;
    }
  }

  get length(): number {
    return this._length;
  }

  save(): Uint8Array {
    // Save the linked list (less start & end) in order.
    const save: ElementSave<T>[] = [];
    for (let elt = this.start.right!; elt !== this.end; elt = elt.right!) {
      save.push({
        id: elt.id,
        value: elt.value,
        isDeleted: elt.isDeleted,
        leftOrigin: elt.leftOrigin!.id,
        rightOrigin: elt.rightOrigin!.id,
      });
    }
    let bytes = new Uint8Array(Buffer.from(JSON.stringify(save)));
    if (GZIP) {
      bytes = pako.gzip(bytes);
    }
    return bytes;
  }

  load(saveData: Optional<Uint8Array>): void {
    if (!saveData.isPresent) return;

    let bytes = saveData.get();
    if (GZIP) {
      bytes = pako.ungzip(bytes);
    }

    const save: ElementSave<T>[] = JSON.parse(Buffer.from(bytes).toString());

    // First create all elements without origin pointers.
    let prev = this.start;
    for (const eltSave of save) {
      const elt: Element<T> = {
        id: eltSave.id,
        value: eltSave.value,
        isDeleted: eltSave.isDeleted,
        leftOrigin: null,
        rightOrigin: null,
        left: prev,
        right: null,
      };
      prev.right = elt;

      // Store in elementsByID.
      let bySender = this.elementsByID.get(elt.id.sender);
      if (bySender === undefined) {
        bySender = [];
        this.elementsByID.set(elt.id.sender, bySender);
      }
      bySender.push(elt);

      prev = elt;
    }
    prev.right = this.end;

    // Now fill in the origin pointers.
    let elt = this.start.right!;
    for (const eltSave of save) {
      elt.leftOrigin = this.getByID(eltSave.leftOrigin);
      elt.rightOrigin = this.getByID(eltSave.rightOrigin);

      elt = elt.right!;
    }
  }

  canGC(): boolean {
    return false;
  }
}

import {
  CPrimitive,
  InitToken,
  MessageMeta
} from "@collabs/collabs";
import pako from "pako";

const GZIP = true;

interface ID {
  sender: string;
  counter: number;
}

interface Node<T> {
  /** For the root, this is ("", 0). */
  id: ID;
  value: T | null;
  isDeleted: boolean;
  /**
   * null when this is the root.
   * For convenience, we store a pointer to the parent instead of just
   * its ID.
   */
  parent: Node<T> | null;
  side: "L" | "R";
  // For traversals, store the children in sorted order.
  leftChildren: Node<T>[];
  rightChildren: Node<T>[];
  /**
   * The non-deleted size of the subtree rooted at this node.
   *
   * This is technically an optimization, but an easy & impactful one.
   */
  size: number;
}

interface InsertMessage<T> {
  type: "insert";
  id: ID;
  value: T;
  parent: ID;
  side: "L" | "R";
}

interface DeleteMessage {
  type: "delete";
  id: ID;
}

interface NodeSave<T> {
  value: T | null;
  isDeleted: boolean;
  parent: ID | null;
  side: "L" | "R";
  size: number;
}

class Tree<T> {
  readonly root: Node<T>;
  /**
   * Used in getByID.
   *
   * Map from ID.sender, to an array that maps ID.counter, to node with that ID.
   */
  private readonly nodesByID = new Map<string, Node<T>[]>();

  constructor() {
    this.root = {
      id: { sender: "", counter: 0 },
      value: null,
      isDeleted: true,
      parent: null,
      side: "R",
      leftChildren: [],
      rightChildren: [],
      size: 0,
    };
    this.nodesByID.set("", [this.root]);
  }

  addNode(id: ID, value: T, parent: Node<T>, side: "L" | "R") {
    const node: Node<T> = {
      id,
      value,
      isDeleted: false,
      parent,
      side,
      leftChildren: [],
      rightChildren: [],
      size: 0,
    };

    // Add to nodesByID.
    let bySender = this.nodesByID.get(id.sender);
    if (bySender === undefined) {
      bySender = [];
      this.nodesByID.set(id.sender, bySender);
    }
    bySender.push(node);

    // Insert into parent's siblings.
    this.insertIntoSiblings(node);

    this.updateSize(node, 1);
  }

  private insertIntoSiblings(node: Node<T>) {
    // Insert node among its same-side siblings, in lexicographic order by id.sender.
    // (The insertion logic guarantees we will never have same-side siblings
    // with the same sender, so there is no need to sub-order by id.counter.)
    const parent = node.parent!;
    const siblings =
      node.side === "L" ? parent.leftChildren : parent.rightChildren;
    let i = 0;
    for (; i < siblings.length; i++) {
      if (node.id.sender < siblings[i].id.sender) break;
    }
    siblings.splice(i, 0, node);
  }

  /**
   * Adds delta to the sizes of node and all of its ancestors.
   */
  updateSize(node: Node<T>, delta: number) {
    for (let anc: Node<T> | null = node; anc !== null; anc = anc.parent) {
      anc.size += delta;
    }
  }

  getByID(id: ID): Node<T> {
    const bySender = this.nodesByID.get(id.sender);
    if (bySender !== undefined) {
      const node = bySender[id.counter];
      if (node !== undefined) return node;
    }
    throw new Error("Unknown ID: " + JSON.stringify(id));
  }

  /**
   * Returns the node at the given index within node's subtree.
   */
  getByIndex(node: Node<T>, index: number): Node<T> {
    if (index < 0 || index >= node.size) {
      throw new Error(
        "Index out of range: " + index + " (size: " + node.size + ")"
      );
    }

    // A recursive approach would be simpler, but overflows the stack at modest
    // depths (~4000). So we do an iterative approach instead.
    let remaining = index;
    recurse: while (true) {
      for (const child of node.leftChildren) {
        if (remaining < child.size) {
          node = child;
          continue recurse;
        }
        remaining -= child.size;
      }
      if (!node.isDeleted) {
        if (remaining === 0) return node;
        remaining--;
      }
      for (const child of node.rightChildren) {
        if (remaining < child.size) {
          node = child;
          continue recurse;
        }
        remaining -= child.size;
      }
      throw new Error("Index in range but not found");
    }
  }

  /**
   * Returns the leftmost left-only descendant of node, i.e., the
   * first left child of the first left child ... of node.
   */
  leftmostDescendant(node: Node<T>): Node<T> {
    let desc = node;
    for (; desc.leftChildren.length !== 0; desc = desc.leftChildren[0]) {}
    return desc;
  }

  *traverse(node: Node<T>): IterableIterator<T> {
    // A recursive approach (like in the paper) would be simpler,
    // but overflows the stack at modest
    // depths (~4000). So we do an iterative approach instead.

    // Stack records the next child to visit for that node.
    // We don't need to store node because we can infer it from the
    // current node's parent etc.
    const stack: { side: "L" | "R"; childIndex: number }[] = [
      { side: "L", childIndex: 0 },
    ];
    while (true) {
      const top = stack[stack.length - 1];
      const children =
        top.side === "L" ? node.leftChildren : node.rightChildren;
      if (top.childIndex === children.length) {
        // We are done with the children on top.side.
        if (top.side === "L") {
          // Visit us, then move to right children.
          if (!node.isDeleted) yield node.value!;
          top.side = "R";
          top.childIndex = 0;
        } else {
          // Go to the parent.
          if (node.parent === null) return;
          node = node.parent;
          stack.pop();
        }
      } else {
        const child = children[top.childIndex];
        // Save for later that we need to visit the next child.
        top.childIndex++;
        if (child.size > 0) {
          // Traverse child.
          node = child;
          stack.push({ side: "L", childIndex: 0 });
        }
      }
    }
  }

  save(): Uint8Array {
    // Convert nodesByID into JSON format, also converting each Node into a NodeSave.
    const save: { [sender: string]: NodeSave<T>[] } = {};
    for (const [sender, bySender] of this.nodesByID) {
      save[sender] = bySender.map((node) => ({
        value: node.value,
        isDeleted: node.isDeleted,
        parent: node.parent?.id ?? null,
        side: node.side,
        size: node.size,
      }));
    }
    return new Uint8Array(Buffer.from(JSON.stringify(save)));
  }

  load(saveData: Uint8Array) {
    const save: { [sender: string]: NodeSave<T>[] } = JSON.parse(
      Buffer.from(saveData).toString()
    );
    // First create all nodes without pointers to other nodes (parent & children).
    for (const [sender, bySenderSave] of Object.entries(save)) {
      this.nodesByID.set(
        sender,
        bySenderSave.map((nodeSave, counter) => ({
          id: { sender, counter },
          parent: null,
          value: nodeSave.value,
          isDeleted: nodeSave.isDeleted,
          side: nodeSave.side,
          size: nodeSave.size,
          leftChildren: [],
          rightChildren: [],
        }))
      );
    }
    // Now fill in the pointers (parent & children).
    for (const [sender, bySender] of this.nodesByID) {
      const bySenderSave = save[sender]!;
      for (let i = 0; i < bySender.length; i++) {
        const node = bySender[i];
        const nodeSave = bySenderSave[i];
        if (nodeSave.parent !== null) {
          node.parent = this.getByID(nodeSave.parent);
          this.insertIntoSiblings(node);
        }
      }
    }
  }
}

export class FugueSimple<T> extends CPrimitive {
  private counter = 0;
  private tree: Tree<T>;

  constructor(init: InitToken) {
    super(init);

    this.tree = new Tree();
  }

  insert(index: number, ...values: T[]): void {
    for (let i = 0; i < values.length; i++) {
      this.insertOne(index + i, values[i]);
    }
  }

  private insertOne(index: number, value: T) {
    // insert generator.
    const id = { sender: this.runtime.replicaID, counter: this.counter };
    this.counter++;
    const leftOrigin =
      index === 0
        ? this.tree.root
        : this.tree.getByIndex(this.tree.root, index - 1);

    let msg: InsertMessage<T>;
    if (leftOrigin.rightChildren.length === 0) {
      // leftOrigin has no right children, so the new node becomes
      // a right child of leftOrigin.
      msg = { type: "insert", id, value, parent: leftOrigin.id, side: "R" };
    } else {
      // Otherwise, the new node is added as a left child of rightOrigin, which
      // is the next node after leftOrigin *including tombstones*.
      // In this case, rightOrigin is the leftmost descendant of leftOrigin's
      // first right child.
      const rightOrigin = this.tree.leftmostDescendant(leftOrigin.rightChildren[0]);
      msg = { type: "insert", id, value, parent: rightOrigin.id, side: "L" };
    }

    // Message is delivered to receivePrimitive (the effector).
    super.sendPrimitive(JSON.stringify(msg));
  }

  delete(startIndex: number, count = 1): void {
    for (let i = 0; i < count; i++) this.deleteOne(startIndex);
  }

  private deleteOne(index: number): void {
    // delete generator.
    const node = this.tree.getByIndex(this.tree.root, index);
    const msg: DeleteMessage = { type: "delete", id: node.id };
    // Message is delivered to receivePrimitive (the effector).
    super.sendPrimitive(JSON.stringify(msg));
  }

  protected receivePrimitive(message: Uint8Array | string, meta: MessageMeta): void {
    const msg: InsertMessage<T> | DeleteMessage = JSON.parse(<string>message);
    switch (msg.type) {
      case "insert":
        // insert effector
        this.tree.addNode(
          msg.id,
          msg.value,
          this.tree.getByID(msg.parent),
          msg.side
        );
        // In a production implementation, we would emit an Insert event here.
        break;
      case "delete":
        // delete effector
        const node = this.tree.getByID(msg.id);
        if (!node.isDeleted) {
          node.value = null;
          node.isDeleted = true;
          this.tree.updateSize(node, -1);
          // In a production implementation, we would emit a Delete event here.
        }
        break;
      default:
        throw new Error("Bad message: " + msg);
    }
  }

  get(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new Error("index out of bounds: " + index);
    }
    const node = this.tree.getByIndex(this.tree.root, index);
    return node.value!;
  }

  values(): IterableIterator<T> {
    return this.tree.traverse(this.tree.root);
  }

  get length(): number {
    return this.tree.root.size;
  }

  savePrimitive(): Uint8Array {
    // No need to save this.counter because we will have a different
    // replicaID next time.
    let bytes = this.tree.save();
    if (GZIP) {
      bytes = pako.gzip(bytes);
    }
    return bytes;
  }
 
  loadPrimitive(savedState: Uint8Array): void {
    if (GZIP) {
      savedState = pako.ungzip(savedState);
    }
    this.tree.load(savedState);
  }
}

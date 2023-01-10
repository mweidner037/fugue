import * as collabs from "@collabs/collabs";
import seedrandom from "seedrandom";
import { TreeFugueSimple } from "tree-fugue-simple";
import { AbstractCrdt, CrdtFactory } from "../../js-lib/index.js"; // eslint-disable-line

export const name = "Tree-Fugue Simple";

/**
 * @implements {CrdtFactory}
 */
export class TreeFugueSimpleFactory {
  constructor() {
    this.rng = seedrandom("42");
  }

  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  create(updateHandler) {
    return new TreeFugueSimpleCRDT(this.rng, updateHandler);
  }

  getName() {
    return name;
  }
}

/**
 * @implements {AbstractCrdt}
 */
export class TreeFugueSimpleCRDT {
  /**
   * @param {seedrandom.prng} rng
   * @param {function(Uint8Array):void} [updateHandler]
   */
  constructor(rng, updateHandler) {
    this.app = new collabs.CRDTApp({
      debugReplicaID: collabs.pseudoRandomReplicaID(rng),
    });
    if (updateHandler) {
      this.app.on("Send", (e) => {
        updateHandler(this._encodeUpdate(e.message, false));
      });
    }
    this.carray = this.app.registerCollab(
      "array",
      collabs.Pre(TreeFugueSimple)()
    );
    // Text is represented as an array of character strings.
    this.ctext = this.app.registerCollab(
      "text",
      collabs.Pre(TreeFugueSimple)()
    );

    this.loaded = false;

    this.inTransact = false;
  }

  /**
   * Collabs distinguishes between "messages" (receive) vs "saves" (load),
   * but these benchmarks do not - they are both "updates".
   * So, we add a byte at the end saying which it is.
   *
   * @param {Uint8Array} messageOrSave
   * @param {boolean} isSave
   * @return {Uint8Array} encoded update
   */
  _encodeUpdate(messageOrSave, isSave) {
    const update = new Uint8Array(messageOrSave.length + 1);
    update.set(messageOrSave);
    update[messageOrSave.length] = isSave ? 1 : 0;
    return update;
  }

  /**
   * Inverse of _encodeUpdate.
   *
   * @param {Uint8Array} update
   * @return {[messageOrSave: Uint8Array, isSave: boolean]}
   */
  _decodeUpdate(update) {
    const messageOrSave = update.subarray(0, update.length - 1);
    const isSave = update[update.length - 1] == 1;
    return [messageOrSave, isSave];
  }

  _checkInitialLoad() {
    if (!this.loaded) {
      // Collabs expects us to notify it if loading is skipped
      // before sending/receiving the first message.
      this.app.load(collabs.Optional.empty());
      this.loaded = true;
    }
  }

  /**
   * @return {Uint8Array|string}
   */
  getEncodedState() {
    return this._encodeUpdate(this.app.save(), true);
  }

  /**
   * @param {Uint8Array} update
   */
  applyUpdate(update) {
    const [messageOrSave, isSave] = this._decodeUpdate(update);
    if (isSave) {
      this.app.load(collabs.Optional.of(messageOrSave));
      this.loaded = true;
    } else {
      this._checkInitialLoad();
      this.app.receive(messageOrSave);
    }
  }

  /**
   * Insert several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {Array<any>} elems
   */
  insertArray(index, elems) {
    this.transact(() => this.carray.insert(index, ...elems));
  }

  /**
   * Delete several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteArray(index, len) {
    this.transact(() => this.carray.delete(index, len));
  }

  /**
   * @return {Array<any>}
   */
  getArray() {
    return [...this.carray.values()];
  }

  /**
   * Insert text into the internal shared text implementation.
   *
   * @param {number} index
   * @param {string} text
   */
  insertText(index, text) {
    this.transact(() => this.ctext.insert(index, ...text));
  }

  /**
   * Delete text from the internal shared text implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteText(index, len) {
    this.transact(() => this.ctext.delete(index, len));
  }

  /**
   * @return {string}
   */
  getText() {
    return [...this.ctext.values()].join("");
  }

  /**
   * @param {function (AbstractCrdt): void} f
   */
  transact(f) {
    const oldInTransact = this.inTransact;
    this.inTransact = true;

    if (!oldInTransact) this._checkInitialLoad();
    f(this);
    if (!oldInTransact) this.app.commitBatch();

    this.inTransact = oldInTransact;
  }
}

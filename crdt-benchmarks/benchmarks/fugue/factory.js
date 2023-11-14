import { CRuntime, ReplicaIDs } from "@collabs/collabs";
import { Fugue, charArraySerializer } from "fugue";
import seedrandom from "seedrandom";
import { AbstractCrdt, CrdtFactory } from "../../js-lib/index.js"; // eslint-disable-line

export const name = "fugue";

/**
 * @implements {CrdtFactory}
 */
export class TreeFugueFactory {
  constructor() {
    this.rng = seedrandom("42");
  }

  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  create(updateHandler) {
    return new TreeFugueCRDT(this.rng, updateHandler);
  }

  getName() {
    return name;
  }
}

/**
 * @implements {AbstractCrdt}
 */
export class TreeFugueCRDT {
  /**
   * @param {seedrandom.prng} rng
   * @param {function(Uint8Array):void} [updateHandler]
   */
  constructor(rng, updateHandler) {
    this.doc = new CRuntime({
      debugReplicaID: ReplicaIDs.pseudoRandom(rng),
    });
    if (updateHandler) {
      this.doc.on("Send", (e) => {
        updateHandler(this._encodeUpdate(e.message, false));
      });
    }
    /**
     * @type {Fugue<any>}
     */
    this.carray = this.doc.registerCollab("array", (init) => new Fugue(init));
    // Text is represented as an array of character strings.
    // However, we use charArraySerializer to represent the whole text as a
    // single string when saving.
    /**
     * @type {Fugue<string>}
     */
    this.ctext = this.doc.registerCollab(
      "text",
      (init) => new Fugue(init, { valueArraySerializer: charArraySerializer })
    );
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

  /**
   * @return {Uint8Array|string}
   */
  getEncodedState() {
    return this._encodeUpdate(this.doc.save(), true);
  }

  /**
   * @param {Uint8Array} update
   */
  applyUpdate(update) {
    const [messageOrSave, isSave] = this._decodeUpdate(update);
    if (isSave) {
      this.doc.load(messageOrSave);
    } else {
      this.doc.receive(messageOrSave);
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
    return this.carray.slice();
  }

  /**
   * Insert text into the internal shared text implementation.
   *
   * @param {number} index
   * @param {string} text
   */
  insertText(index, text) {
    this.transact(() => this.ctext.insert(index, text));
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
    return this.ctext.toString();
  }

  /**
   * @param {function (AbstractCrdt): void} f
   */
  transact(f) {
    this.doc.transact(() => f(this));
  }

  free() {}
}

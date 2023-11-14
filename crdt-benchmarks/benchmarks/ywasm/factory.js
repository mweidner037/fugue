
import * as Y from 'ywasm';
import { AbstractCrdt, CrdtFactory } from '../../js-lib/index.js'; // eslint-disable-line

export const name = 'ywasm'

/**
 * @implements {CrdtFactory}
 */
export class YwasmFactory {
  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  create (updateHandler) {
    return new YwasmCRDT(updateHandler)
  }

  getName () {
    return name
  }
}

/**
 * @implements {AbstractCrdt}
 */
export class YwasmCRDT {
  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  constructor (updateHandler) {
    this.ydoc = new Y.YDoc()
    if (updateHandler) {
      this.ydoc.onUpdateV2(update => {
        updateHandler(update)
      })
    }
    this.yarray = this.ydoc.getArray('array')
    this.ytext = this.ydoc.getText('text')
    this.txn = null
  }

  /**
   * @return {Uint8Array|string}
   */
  getEncodedState () {
    return Y.encodeStateAsUpdateV2(this.ydoc)
  }

  /**
   * @param {Uint8Array} update
   */
  applyUpdate (update) {
    Y.applyUpdateV2(this.ydoc, update)
  }

  /**
   * Insert several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {Array<any>} elems
   */
  insertArray (index, elems) {
    this.transact(() => this.yarray.insert(index, elems, this.txn))
  }

  /**
   * Delete several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteArray (index, len) {
    this.transact(() => this.yarray.delete(index, len, this.txn))
  }

  /**
   * @return {Array<any>}
   */
  getArray () {
    return this.yarray.toJson()
  }

  /**
   * Insert text into the internal shared text implementation.
   *
   * @param {number} index
   * @param {string} text
   */
  insertText (index, text) {
    this.transact(() => this.ytext.insert(index, text, null, this.txn))
  }

  /**
   * Delete text from the internal shared text implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteText (index, len) {
    this.transact(() => this.ytext.delete(index, len, this.txn))
  }

  /**
   * @return {string}
   */
  getText () {
    return this.ytext.toString()
  }

  /**
   * @param {function (AbstractCrdt): void} f
   */
  transact (f) {
    this.txn = this.txn || this.ydoc.writeTransaction()
    try {
      f(this)
    } finally {
      if (this.txn) {
        this.txn.free()
        this.txn = null
      }
    }
  }

  free() {}
}

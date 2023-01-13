import * as error from 'lib0/error'
import * as prng from 'lib0/prng'
// @ts-ignore
import { performance as perf } from 'isomorphic.js'

export const N = 6000
export const disableAutomergeBenchmarks = true
export const disablePeersCrdtsBenchmarks = true
export const disableYjsBenchmarks = true
export const disableOTBenchmarks = false

export const WARMUP_TRIALS = 5;
export const MEASURED_TRIALS = 10;

export const benchmarkResults = {}

/**
 * 
 * @param {*} libname 
 * @param {*} benchmarkid 
 * @param {*} result
 * @param {number} [trial] trial number, negative for warmups
 */
export const setBenchmarkResult = (libname, benchmarkid, result, trial) => {
  if (trial !== undefined) {
    console.info(libname, benchmarkid, "Trial", trial, result)
  }
  else console.info(libname, benchmarkid, result)
  // Don't record warmup trials.
  if (trial !== undefined && trial < 0) return;

  const libResults = benchmarkResults[benchmarkid] || (benchmarkResults[benchmarkid] = {})
  if (libResults[libname] === undefined) libResults[libname] = [];
  libResults[libname].push(result);
}

export const writeBenchmarkResultsToFile = async (path, filter) => {
  if (typeof process !== 'undefined') {
    const fs = await import('fs')

    let json = {}
    try {
      json = JSON.parse(fs.readFileSync(path, 'utf8'))
    } catch (e) {}
    if (json[N] == null) {
      json[N] = {}
    }
    // write results
    for (const key in benchmarkResults) {
      if (filter(key)) {
        json[N][key] = Object.assign(json[N][key] || {}, benchmarkResults[key])
      }
    }
    fs.writeFileSync(path, JSON.stringify(json, null, 2))
  }
}

/**
 * 
 * @param {*} libname 
 * @param {*} id 
 * @param {*} f 
 * @param {number} [trial] trial number, negative for warmups
 */
export const benchmarkTime = (libname, id, f, trial) => {
  const start = perf.now()
  f()
  const time = perf.now() - start
  setBenchmarkResult(libname, id, `${time.toFixed(0)} ms`, trial)
}

/**
 * @param {string} name
 * @param {function(string):boolean} filter
 * @param {function(string):(void|Promise<void>)} f
 */
export const runBenchmark = async (name, filter, f) => {
  if (!filter(name)) {
    return
  }
  await f(name)
}

/**
 * A Pseudo Random Number Generator with a constant seed, so that repeating the runs will use the same random values.
 */
export const gen = prng.create(42)

export const cpy = o => JSON.parse(JSON.stringify(o))

export const getMemUsed = () => {
  if (typeof global !== 'undefined' && typeof process !== 'undefined') {
    if (global.gc) {
      global.gc()
    }
    return process.memoryUsage().heapUsed
  }
  return 0
}

/**
 * 
 * @param {*} libname 
 * @param {*} id 
 * @param {*} startHeapUsed 
 * @param {number} [trial] trial number, negative for warmups
 */
export const logMemoryUsed = (libname, id, startHeapUsed, trial) => {
  if (typeof global !== 'undefined' && typeof process !== 'undefined') {
    if (global.gc) {
      global.gc()
    }
    const diff = process.memoryUsage().heapUsed - startHeapUsed
    setBenchmarkResult(libname, `${id} (memUsed)`, `${diff} bytes`, trial)
  }
}

export const tryGc = () => {
  if (typeof global !== 'undefined' && typeof process !== 'undefined' && global.gc) {
    global.gc()
  }
}

/**
 * Insert a string into a deltaRga crdt
 *
 * @param {any} doc
 * @param {number} index
 * @param {Array<any>|string} content
 * @return {Array<ArrayBuffer>}
 */
export const deltaInsertHelper = (doc, index, content) => {
  const deltas = []
  for (let i = 0; i < content.length; i++) {
    deltas.push(doc.insertAt(index + i, content[i]))
  }
  return deltas
}

/**
 * Insert a string into a deltaRga crdt
 *
 * @param {any} doc
 * @param {number} index
 * @param {number} length
 * @return {Array<ArrayBuffer>}
 */
export const deltaDeleteHelper = (doc, index, length) => {
  const deltas = []
  for (let i = 0; i < length; i++) {
    deltas.push(doc.removeAt(index))
  }
  return deltas
}

export class CrdtFactory {
  /**
   * @param {function(Uint8Array|string):void} [updateHandler]
   * @return {AbstractCrdt}
   */
  create (updateHandler) {
    error.methodUnimplemented()
  }

  /**
   * @return {string}
   */
  getName () {
    error.methodUnimplemented()
  }
}

/**
 * Implement this Abstract CRDT to test it using the crdt-benchmarks library.
 *
 * We expect that the used list CRDT implementation supports manipulation of
 * text and arrays. There are different tests for teach of these
 * features. The `insertArray` & `deleteArray` methods must operate on an
 * internal representation of an instantiated shared Array.
 * These operations must not be cached. They must
 * add an update message immediately to the updates array
 */
export class AbstractCrdt {
  /**
   * @param {function(Uint8Array|string):void} [updateHandler]
   */
  constructor (updateHandler) {
  }

  /**
   * @return {Uint8Array|string}
   */
  getEncodedState () {
    error.methodUnimplemented()
  }

  /**
   * @param {Uint8Array|string} update
   */
  applyUpdate (update) {
    error.methodUnimplemented()
  }

  /**
   * Insert several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {Array<any>} elements
   */
  insertArray (index, elements) {
    error.methodUnimplemented()
  }

  /**
   * Delete several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {number} length
   */
  deleteArray (index, length) {
    error.methodUnimplemented()
  }

  /**
   * @return {Array<any>}
   */
  getArray () {
    error.methodUnimplemented()
  }

  /**
   * Insert text into the internal shared text implementation.
   *
   * @param {number} index
   * @param {string} text
   */
  insertText (index, text) {
    error.methodUnimplemented()
  }

  /**
   * Delete text from the internal shared text implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteText (index, len) {
    error.methodUnimplemented()
  }

  /**
   * @return {string}
   */
  getText () {
    error.methodUnimplemented()
  }

  /**
   * @param {function (AbstractCrdt): void} f
   */
  transact (f) {
    error.methodUnimplemented()
  }
}

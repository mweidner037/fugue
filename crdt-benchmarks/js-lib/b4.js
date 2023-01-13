import * as t from 'lib0/testing';
import { CrdtFactory } from './index.js'; // eslint-disable-line
import { benchmarkTime, getMemUsed, logMemoryUsed, MEASURED_TRIALS, runBenchmark, setBenchmarkResult, tryGc, WARMUP_TRIALS } from './utils.js';
// @ts-ignore
import { edits, finalText } from './b4-editing-trace.js';

/**
 * @param {CrdtFactory} crdtFactory
 * @param {function(string):boolean} filter
 */
export const runBenchmarkB4 = async (crdtFactory, filter) => {
  const benchmarkTemplate = (id, inputData, changeFunction, check) => {
    for (let trial = -WARMUP_TRIALS; trial < MEASURED_TRIALS; trial++) {
      let encodedState = /** @type {any} */ (null)
      ;(() => {
        let updateSize = 0;
        // We scope the creation of doc1 so we can gc it before we parse it again.
        const doc1 = crdtFactory.create(update => {updateSize += update.length})
        benchmarkTime(crdtFactory.getName(), `${id} (time)`, () => {
          for (let i = 0; i < inputData.length; i++) {
            changeFunction(doc1, inputData[i], i)
            // we forcefully overwrite updates because we want to reduce potentially significant memory overhead
          }
        }, trial)
        check(doc1)
        setBenchmarkResult(crdtFactory.getName(), `${id} (updateSize)`, `${updateSize} bytes`, trial)
        benchmarkTime(crdtFactory.getName(), `${id} (encodeTime)`, () => {
          encodedState = doc1.getEncodedState()
        }, trial)
      })()
      const documentSize = encodedState.byteLength
      setBenchmarkResult(crdtFactory.getName(), `${id} (docSize)`, `${documentSize} bytes`, trial)
      ;(() => {
        const startHeapUsed = getMemUsed()
        // @ts-ignore we only store doc so it is not garbage collected
        let doc = null // eslint-disable-line
        benchmarkTime(crdtFactory.getName(), `${id} (parseTime)`, () => {
          doc = crdtFactory.create()
          doc.applyUpdate(encodedState)
        }, trial)
        logMemoryUsed(crdtFactory.getName(), id, startHeapUsed, trial)
      })()
    }
  }

  await runBenchmark('[B4] Apply real-world editing dataset', filter, async benchmarkName => {
    await benchmarkTemplate(
      benchmarkName,
      edits,
      (doc, edit) => {
        doc.deleteText(edit[0], edit[1])
        if (edit[2]) {
          doc.insertText(edit[0], edit[2])
        }
      },
      doc1 => {
        t.compareStrings(doc1.getText(), finalText)
      },
    )
  })

  await runBenchmark('[B4x100] Apply real-world editing dataset 100 times', filter, benchmarkName => {
    const multiplicator = 100
    for (let trial = -WARMUP_TRIALS; trial < MEASURED_TRIALS; trial++) {
      let encodedState = /** @type {any} */ (null)

      ;(() => {
        let updateSize = 0;
        const doc = crdtFactory.create(update => {updateSize += update.length})

        benchmarkTime(crdtFactory.getName(), `${benchmarkName} (time)`, () => {
          for (let iterations = 0; iterations < multiplicator; iterations++) {
            if (iterations > 0 && iterations % 5 === 0) {
              console.log(`Finished ${iterations}%`)
            }
            for (let i = 0; i < edits.length; i++) {
              const edit = edits[i]
              if (edit[1] > 0) {
                doc.deleteText(edit[0], edit[1])
              }
              if (edit[2]) {
                doc.insertText(edit[0], edit[2])
              }
            }
          }
        }, trial)
        setBenchmarkResult(crdtFactory.getName(), `${benchmarkName} (updateSize)`, `${updateSize} bytes`, trial)
        /**
         * @type {any}
         */
        benchmarkTime(crdtFactory.getName(), `${benchmarkName} (encodeTime)`, () => {
          encodedState = doc.getEncodedState()
        }, trial)
      })()

      ;(() => {
        const documentSize = encodedState.byteLength
        setBenchmarkResult(crdtFactory.getName(), `${benchmarkName} (docSize)`, `${documentSize} bytes`, trial)
        tryGc()
      })()

      ;(() => {
        const startHeapUsed = getMemUsed()
        // @ts-ignore we only store doc so it is not garbage collected
        let doc = null // eslint-disable-line
        benchmarkTime(crdtFactory.getName(), `${benchmarkName} (parseTime)`, () => {
          doc = crdtFactory.create()
          doc.applyUpdate(encodedState)
        }, trial)
        logMemoryUsed(crdtFactory.getName(), benchmarkName, startHeapUsed, trial)
      })()
    }
  })
}

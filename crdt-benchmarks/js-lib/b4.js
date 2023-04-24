import * as t from 'lib0/testing';
import { CrdtFactory } from './index.js'; // eslint-disable-line
import { benchmarkTime, getMemUsed, logMemoryUsed, MEASURED_TRIALS, runBenchmark, setBenchmarkResult, tryGc, WARMUP_TRIALS } from './utils.js';
// @ts-ignore
import { edits, finalText } from './b4-editing-trace.js';

/** How often (in operations) to measure over-time stats. */
const OVER_TIME_INTERVAL = 1000;

/**
 * @param {CrdtFactory} crdtFactory
 * @param {function(string):boolean} filter
 */
export const runBenchmarkB4 = async (crdtFactory, filter) => {
  const benchmarkTemplate = async (id, inputData, changeFunction, check) => {
    for (let trial = -WARMUP_TRIALS; trial < MEASURED_TRIALS; trial++) {
      let encodedState = /** @type {any} */ (null);
      await (async () => {
        let updateSize = 0;

        // Extra effort to encourage GC before starting measurement, since otherwise ending
        // measurements don't match [B4.3] (memory over time)'s ending values.
        await new Promise(resolve => setTimeout(resolve, 100));
        const startMemUsed = getMemUsed();
        await new Promise(resolve => setTimeout(resolve, 100));

        let doc1 = crdtFactory.create(update => {updateSize += update.length})
        benchmarkTime(crdtFactory.getName(), `${id} (time)`, () => {
          for (let i = 0; i < inputData.length; i++) {
            changeFunction(doc1, inputData[i], i)
          }
        }, trial)
        logMemoryUsed(crdtFactory.getName(), id, startMemUsed, trial)
        check(doc1)
        setBenchmarkResult(crdtFactory.getName(), `${id} (updateSize)`, `${updateSize} bytes`, trial)
        benchmarkTime(crdtFactory.getName(), `${id} (encodeTime)`, () => {
          encodedState = doc1.getEncodedState()
        }, trial)
        doc1.free();
        doc1 = null;
      })();
      const documentSize = encodedState.byteLength;
      setBenchmarkResult(crdtFactory.getName(), `${id} (docSize)`, `${documentSize} bytes`, trial);
      await (async () => {
        let doc = null // eslint-disable-line
        benchmarkTime(crdtFactory.getName(), `${id} (parseTime)`, () => {
          doc = crdtFactory.create()
          doc.applyUpdate(encodedState)
        }, trial)
        doc.free();
        doc = null;
      })();
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

  await runBenchmark('[B4.2] Measure docSize over time for real-world editing dataset', filter, async benchmarkName => {
    const textSizes = new Array(Math.floor(edits.length / OVER_TIME_INTERVAL));
    const docSizes = new Array(Math.floor(edits.length / OVER_TIME_INTERVAL));
    for (let trial = -WARMUP_TRIALS; trial < MEASURED_TRIALS; trial++) {
      const doc = crdtFactory.create();
      for (let i = 0; i < edits.length; i++) {
        if (i % OVER_TIME_INTERVAL === 0) {
          const idx = Math.floor(i / OVER_TIME_INTERVAL)
          docSizes[idx] = doc.getEncodedState().length;
          if (trial === -WARMUP_TRIALS) textSizes[idx] = doc.getText().length;
        }
        const edit = edits[i]
        if (edit[1] > 0) {
          doc.deleteText(edit[0], edit[1])
        }
        if (edit[2]) {
          doc.insertText(edit[0], edit[2])
        }
      }
      // Output format: all values joined with ",".
      // docSizeOverTime: docSize (i.e., save size), in bytes.
      setBenchmarkResult(crdtFactory.getName(), `${benchmarkName} (docSizeOverTime)`, docSizes.join(","), trial)
      // textSizeOverTime: literal text size, in characters (= bytes in utf8, since the text is ascii).
      // This is independent of the algorithm and is just used for reference.
      if (trial === -WARMUP_TRIALS) {
        setBenchmarkResult(crdtFactory.getName(), `${benchmarkName} (textSizeOverTime)`, textSizes.join(","))
      }

      doc.free();
    }
  })

  await runBenchmark('[B4.3] Measure memUsed over time for real-world editing dataset', filter, async benchmarkName => {
    const memUseds = new Array(Math.floor(edits.length / OVER_TIME_INTERVAL));
    for (let trial = -WARMUP_TRIALS; trial < MEASURED_TRIALS; trial++) {
      // Extra effort to encourage GC before starting measurement, since otherwise later
      // measurements go negative.
      await new Promise(resolve => setTimeout(resolve, 100));
      const startMemUsed = getMemUsed();
      await new Promise(resolve => setTimeout(resolve, 100));

      let doc = crdtFactory.create();
      for (let i = 0; i < edits.length; i++) {
        if (i % OVER_TIME_INTERVAL === 0) {
          const diff = getMemUsed() - startMemUsed
          const idx = Math.floor(i / OVER_TIME_INTERVAL)
          memUseds[idx] = diff;
        }
        const edit = edits[i]
        if (edit[1] > 0) {
          doc.deleteText(edit[0], edit[1])
        }
        if (edit[2]) {
          doc.insertText(edit[0], edit[2])
        }
      }
      // Output format: all values joined with ",".
      // memUsedOverTime: memUsed (i.e., heap used), in bytes.
      setBenchmarkResult(crdtFactory.getName(), `${benchmarkName} (memUsedOverTime)`, memUseds.join(","), trial)

      doc.free();
      // This seems to be necessary to prevent counting doc in the next trial's
      // getMemUsed(), which otherwise causes a bunch of negative diffs.
      doc = null;
    }
  })

  await runBenchmark('[B4x100] Apply real-world editing dataset 100 times', filter, async benchmarkName => {
    const multiplicator = 100
    for (let trial = -WARMUP_TRIALS; trial < MEASURED_TRIALS; trial++) {
      // Pause a bit to encourage GC between trials (else may OOM after several trials).
      await new Promise((resolve) => setTimeout(resolve, 2000));

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

        doc.free();
      })()

      ;(() => {
        const documentSize = encodedState.byteLength
        setBenchmarkResult(crdtFactory.getName(), `${benchmarkName} (docSize)`, `${documentSize} bytes`, trial)
        tryGc()
      })()

      ;(() => {
        const startMemUsed = getMemUsed()
        // @ts-ignore we only store doc so it is not garbage collected
        let doc = null // eslint-disable-line
        benchmarkTime(crdtFactory.getName(), `${benchmarkName} (parseTime)`, () => {
          doc = crdtFactory.create()
          doc.applyUpdate(encodedState)
        }, trial)
        logMemoryUsed(crdtFactory.getName(), benchmarkName, startMemUsed, trial)
        doc.free();
      })()
    }
  })
}

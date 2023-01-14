import { runBenchmarks, writeBenchmarkResultsToFile } from '../../js-lib/index.js';
import { AutomergeFactory } from './factory.js';

;(async () => {
  // Only run B4 tests; automerge-wasm appears to crash after too many tests, so
  // we prioritize B4 over the microbenchmarks.
  await runBenchmarks(new AutomergeFactory(), testName => (testName.startsWith('[B4') && !testName.startsWith('[B4x100')))
  writeBenchmarkResultsToFile('../results.json', testName => true)
})()

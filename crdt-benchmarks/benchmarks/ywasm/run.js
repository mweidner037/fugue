import { runBenchmarks, writeBenchmarkResultsToFile } from '../../js-lib/index.js';
import { YwasmFactory } from './factory.js';
(async () => {
  // TODO: include 100x
  await runBenchmarks(new YwasmFactory(), testName => !testName.startsWith('[B4x100')) // !testName.startsWith('[B4'))
  writeBenchmarkResultsToFile('../results.json', testName => true)
})()

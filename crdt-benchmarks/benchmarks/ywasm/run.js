import { runBenchmarks, writeBenchmarkResultsToFile } from '../../js-lib/index.js';
import { YwasmFactory } from './factory.js';
(async () => {
  await runBenchmarks(new YwasmFactory(), testName => testName.startsWith('[B3.4]'))
  writeBenchmarkResultsToFile('../results.json', testName => true)
})()

import { runBenchmarks, writeBenchmarkResultsToFile } from '../../js-lib/index.js';
import { YwasmFactory } from './factory.js';
(async () => {
  await runBenchmarks(new YwasmFactory(), testName => !(testName.startsWith("[B4x100") || testName.startsWith("[B4.")))
  writeBenchmarkResultsToFile('../results.json', testName => true)
})()

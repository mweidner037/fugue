import { FugueFactory } from "./factory.js";
import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";

(async () => {
  await runBenchmarks(new FugueFactory(), (testName) => true);
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

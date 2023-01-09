import { TreeFugueFactory } from "./factory.js";
import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";

(async () => {
  await runBenchmarks(new TreeFugueFactory(), (testName) => true);
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

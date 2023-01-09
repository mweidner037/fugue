import { TreeFugueSimpleFactory } from "./factory.js";
import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";

(async () => {
  await runBenchmarks(new TreeFugueSimpleFactory(), (testName) => true);
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

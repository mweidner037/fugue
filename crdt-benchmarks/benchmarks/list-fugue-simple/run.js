import { ListFugueSimpleFactory } from "./factory.js";
import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";

(async () => {
  await runBenchmarks(new ListFugueSimpleFactory(), (testName) => true);
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

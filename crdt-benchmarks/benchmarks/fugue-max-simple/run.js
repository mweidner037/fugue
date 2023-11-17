import {
  runBenchmarks,
  writeBenchmarkResultsToFile
} from "../../js-lib/index.js";
import { FugueMaxSimpleFactory } from "./factory.js";

(async () => {
  await runBenchmarks(
    new FugueMaxSimpleFactory(),
    (testName) => !(testName.startsWith("[B4x100") || testName.startsWith("[B4."))
  );
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

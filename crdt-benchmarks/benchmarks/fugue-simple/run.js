import {
    runBenchmarks,
    writeBenchmarkResultsToFile
} from "../../js-lib/index.js";
import { FugueSimpleFactory } from "./factory.js";

(async () => {
  await runBenchmarks(
    new FugueSimpleFactory(),
    (testName) => !(testName.startsWith("[B4x100") || testName.startsWith("[B4."))
  );
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

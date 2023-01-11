import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";
import { TreeFugueSimpleFactory } from "./factory.js";

(async () => {
  await runBenchmarks(
    new TreeFugueSimpleFactory(),
    (testName) => !testName.startsWith("[B4x100")
  );
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

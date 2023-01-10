import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";
import { ListFugueSimpleFactory } from "./factory.js";

(async () => {
  await runBenchmarks(
    new ListFugueSimpleFactory(),
    (testName) => !testName.startsWith("[B4x100")
  );
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

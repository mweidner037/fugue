import process from "process";
import {
    runBenchmarks,
    writeBenchmarkResultsToFile
} from "../../js-lib/index.js";
import { FugueFactory } from "./factory.js";

// Run B4x100 (real text trace x100) only, iff passed "B4100" command-line arg
// (and if so, do only that).
const doB4x100 = process.argv[2] === "B4x100";

(async () => {
  await runBenchmarks(new FugueFactory(), (testName) => (testName.startsWith("[B4x100") === doB4x100));
  writeBenchmarkResultsToFile("../results.json", (testName) => true);
})();

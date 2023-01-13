#!/usr/bin/env node
/**
 * Render results with conditition N=5000 of yjs and automerge
 * @example
 *   node ./render-table benchmarks/results.json 5000 yjs automerge
 */

import fs from 'fs';
import { MEASURED_TRIALS, WARMUP_TRIALS } from 'js-lib';
import * as math from "mathjs";

/**
 * 
 * @param {string[] | undefined} data 
 * @return {string}
 */
function arrayToStats(data) {
  if (data === undefined || data.length === 0) return 'skipped';
  if (data.length === 1) return data[0];

  const units = data[0].split(" ")[1];
  const values = data.map(valueStr => Number.parseFloat(valueStr.split(" ")[0]));
  const mean = Math.round(math.mean(values));
  // @ts-ignore wrong typings for math.std?
  const stddev = Math.round(math.std(values));
  return `${mean} +/- ${stddev} ${units}`
}

const path = process.argv[2]
const N = process.argv[3]
const benchmarkNames = process.argv.slice(4)
const benchmarkResults = JSON.parse(fs.readFileSync(path, 'utf8'))[N]

// print markdown table with the results
// header
let mdTable = `Format: mean +/- stddev; ${MEASURED_TRIALS} measured trials, ${WARMUP_TRIALS} warmup trials.\n\n`;
mdTable += `N = ${N} | ${benchmarkNames.join(' | ')}|\n`
// table-widths
mdTable += `| :- | ${benchmarkNames.map(() => ' -: ').join('|')} |\n`

for (const id in benchmarkResults) {
  // TODO: data is now arrays instead of value, render avg and stddev.
  mdTable += `|${id.padEnd(73, ' ')} | ${benchmarkNames.map(name => arrayToStats(benchmarkResults[id][name]).padStart(15, ' ')).join(' | ')} |\n`
}
console.log(mdTable)

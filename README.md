# Fugue code and benchmarks

Code and benchmarks for the paper ["The Art of the Fugue: Minimizing Interleaving in Collaborative Text Editing"](https://arxiv.org/abs/2305.00583) by Matthew Weidner and Martin Kleppmann, 2023. See the paper's Section 4 for a description.

## Instructions

To reproduce the paper benchmarks:

1. Install Node.js (we used v18.15.0, but newer should also work).
2. In this folder:

```bash
# Install dependencies.
npm ci
# Build fugue implementations, run most benchmarks, and rewrite results_table.md.
# Takes ~2 hours.
npm start
# Run real text trace x100 benchmarks and rewrite results_table.md.
# Takes ~3 hours.
npm run B4x100
```

Statistics are written to `results_table.md`, while raw data is written to `crdt-benchmarks/benchmarks/results.json`. Those files initially contain the measurements used in the paper.

> `results.json` is additive: each benchmark run adds its data to the existing file, only overwriting previous data for the same benchmarks. `results_table.md` is generated from the full `results.json` each time. To delete both files and start fresh, do `npm run dataclean`.

> To speed things up, you can reduce the `_TRIALS` counts in `crdt-benchmarks/js-lib/utils.js`.

## Implementations

- `fugue/`: Fugue
- `fugue-simple/`: Fugue Simple

## Benchmarks info

The `crdt-benchmarks` folder is modified from [https://github.com/dmonad/crdt-benchmarks/](https://github.com/dmonad/crdt-benchmarks/) by Kevin Jahns. We added our Fugue implementations to the suite (in `crdt-benchmarks/benchmarks`), removed measurements that are not relevant to the paper, and made minor tweaks (e.g. in B4, we measure memory usage of the "live" typing user instead of a future user who loads the document).

Info on microbenchmarks (measured but not described in the paper) is found in `crdt-benchmarks/README.md`.

## Misc

`yjs-interleave/` runs the Yjs backward interleaving (multi-replica) code from the paper's Appendix A.1.9. Run with `npm start` in that folder; the code is in `yjs-interleave/index.js`.

`charts.xlsx` is a spreadsheet used to calculate average throughputs and the over-time charts.

# Fugue code and benchmarks

For the paper's Section 4.

## Instructions

To reproduce the paper benchmarks:

1. Install Node.js (we used version 16.13.1, but newer should also work).
2. In this folder:
```bash
# Install dependencies.
npm ci
# Build fugue implementations, run most benchmarks, and rewrite results_table.md.
# Takes some time.
npm start
# Run real text trace x100 benchmarks and rewrite results_table.md.
# Takes a while.
npm run B4x100
```

Statistics are written to `results_table.md`, while raw data is written to `crdt-benchmarks/benchmarks/results.json`. Those files initially contain the measurements used in the paper.

> `results.json` is additive: each benchmark run adds its data to the existing file, only overwriting previous data for the same benchmarks. `results_table.md` is generated from the full `results.json` each time. To delete both files and start fresh, do `npm run dataclean`.

> To speed things up, you can reduce the `_TRIALS` counts in `crdt-benchmarks/js-lib/utils.js`.

## Implementations

- `tree-fugue/`: Tree-Fugue
- `tree-fugue-simple/`: Tree-Fugue Simple
- `list-fugue-simple/`: List-Fugue Simple

## Benchmarks info

The `crdt-benchmarks` folder is modified from [https://github.com/dmonad/crdt-benchmarks/](https://github.com/dmonad/crdt-benchmarks/) by Kevin Jahns. We added our Fugue implementations to the suite (in `crdt-benchmarks/benchmarks`), removed measurements that are not relevant to the paper, and made minor tweaks (e.g. recording network usage during \[B4\]).

Info on microbenchmarks (measured but not described in the paper) is found in `crdt-benchmarks/README.md`.
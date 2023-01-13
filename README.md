# Fugue code

For the paper's Section 4.

## Instructions

To reproduce the paper benchmarks:

1. Install Node.js (we used version 16.13.1, but newer should also work).
2. Starting in this folder, run commands:
```bash
# Install dependencies.
npm ci
# Build Fugue implementations.
npm run build
# Run benchmarks (takes some time).
# (Do `npm start` in an individual crdt-benchmarks/benchmarks/ subfolder to do just that implementation.)
cd crdt-benchmarks/
npm start
# Make results table.
npm run table > table.md
```

Results are placed in `crdt-benchmarks/table.md`. That file initially contains the data used in the paper.

## Implementations

- `tree-fugue/`: Tree-Fugue
- `tree-fugue-simple/`: Tree-Fugue Simple
- `list-fugue-simple/`: List-Fugue Simple

## Benchmarks

The `crdt-benchmarks` folder is modified from [https://github.com/dmonad/crdt-benchmarks/](https://github.com/dmonad/crdt-benchmarks/) by Kevin Jahns. We added our Fugue implementations to the suite (in `crdt-benchmarks/benchmarks`), removed measurements that are not relevant to the paper, and made minor tweaks (e.g. recording network usage during \[B4\]).

Info on microbenchmarks (measured but not described in the paper) is found in `crdt-benchmarks/README.md`.
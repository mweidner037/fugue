// Run with `npm start` in this folder.

const Y = require("yjs");
const docA = new Y.Doc(),
  docB = new Y.Doc(),
  docC = new Y.Doc();

// clientID is Yjs's name for replicaID.
// We set them to have order docA < docB < docC.
docA.clientID = 1;
docB.clientID = 2;
docC.clientID = 3;

// Replica C inserts c.
docC.getArray().insert(0, ["c"]);
// After receiving this insert, replica A prepends a.
Y.applyUpdateV2(docA, Y.encodeStateAsUpdateV2(docC, Y.encodeStateVector(docA)));
docA.getArray().insert(0, ["a"]);

// Concurrently to both operations, replica B inserts b into its (empty) list.
docB.getArray().insert(0, ["b"]);

// In the merged final state, the order is abc.
Y.applyUpdateV2(docA, Y.encodeStateAsUpdateV2(docB, Y.encodeStateVector(docA)));
console.log(JSON.stringify(docA.getArray().toArray()));
// Prints: ["a","b","c"]

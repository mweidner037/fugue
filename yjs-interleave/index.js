// Run with `npm start` in this folder.

// Set up three replicas
const Y = require('yjs')
let doc1 = new Y.Doc(), doc2 = new Y.Doc(), doc3 = new Y.Doc()
doc1.clientID = 1; doc2.clientID = 2; doc3.clientID = 3

// Replica 3 inserts 'b'
doc3.getArray().insert(0, ['b'])

// Replica 1 inserts 'a' before 'b'
Y.applyUpdateV2(doc1, Y.encodeStateAsUpdateV2(doc3, Y.encodeStateVector(doc1)))
doc1.getArray().insert(0, ['a'])

// Replica 2 concurrently inserts 'x'
doc2.getArray().insert(0, ['x'])

// Prints the merged document: "axb"
Y.applyUpdateV2(doc1, Y.encodeStateAsUpdateV2(doc2, Y.encodeStateVector(doc1)))
console.log(doc1.getArray().toArray().join(''))
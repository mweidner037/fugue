
import * as Y from 'yjs'
import { setBenchmarkResult, gen, N, benchmarkTime, disableAutomergeBenchmarks } from './utils.js'
import * as prng from 'lib0/prng.js'
import * as math from 'lib0/math.js'
import * as t from 'lib0/testing.js'
import Automerge from 'automerge'

const benchmarkYjs = (id, inputData, changeFunction, check) => {
  const doc1 = new Y.Doc()
  const doc2 = new Y.Doc()
  let updateSize = 0
  doc1.on('update', update => {
    updateSize += update.byteLength
    Y.applyUpdate(doc2, update, benchmarkYjs)
  })
  benchmarkTime('yjs', `${id} (time)`, () => {
    for (let i = 0; i < inputData.length; i++) {
      changeFunction(doc1, inputData[i], i)
    }
  })
  check(doc1, doc2)
  setBenchmarkResult('yjs', `${id} (avgUpdateSize)`, `${Math.round(updateSize / inputData.length)} bytes`)
  const encodedState = Y.encodeStateAsUpdate(doc1)
  const documentSize = encodedState.byteLength
  setBenchmarkResult('yjs', `${id} (docSize)`, `${documentSize} bytes`)
  benchmarkTime('yjs', `${id} (parseTime)`, () => {
    const doc = new Y.Doc()
    Y.applyUpdate(doc, encodedState)
  })
}

const benchmarkAutomerge = (id, init, inputData, changeFunction, check) => {
  if (N > 2000 || disableAutomergeBenchmarks) {
    setBenchmarkResult('automerge', id, 'skipping')
    return
  }
  const emptyDoc = Automerge.init()
  let doc1 = Automerge.change(emptyDoc, init)
  let doc2 = Automerge.applyChanges(Automerge.init(), Automerge.getChanges(emptyDoc, doc1))
  let updateSize = 0
  benchmarkTime('automerge', `${id} (time)`, () => {
    for (let i = 0; i < inputData.length; i++) {
      const updatedDoc = Automerge.change(doc1, doc => {
        changeFunction(doc, inputData[i], i)
      })
      const update = JSON.stringify(Automerge.getChanges(doc1, updatedDoc))
      updateSize += update.length
      doc2 = Automerge.applyChanges(doc2, JSON.parse(update))
      doc1 = updatedDoc
    }
  })
  check(doc1, doc2)
  setBenchmarkResult('automerge', `${id} (avgUpdateSize)`, `${Math.round(updateSize / inputData.length)} bytes`)
  const encodedState = Automerge.save(doc1)
  const documentSize = encodedState.length
  setBenchmarkResult('automerge', `${id} (docSize)`, `${documentSize} bytes`)
  benchmarkTime('automerge', `${id} (parseTime)`, () => {
    Automerge.load(encodedState)
  })
}

;(() => {
  const benchmarkName = '[B1.1] Append N characters'
  const string = prng.word(gen, N, N)
  benchmarkYjs(
    benchmarkName,
    string,
    (doc, s, i) => { doc.getText('text').insert(i, s) },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === string)
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    string,
    (doc, s, i) => { doc.text.insertAt(i, s) },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === string)
    }
  )
})()

;(() => {
  const benchmarkName = '[B1.2] Insert string of length N'
  const string = prng.word(gen, N, N)
  // B1.1: Insert text from left to right
  benchmarkYjs(
    benchmarkName,
    [string],
    (doc, s, i) => { doc.getText('text').insert(i, s) },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === string)
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    [string],
    (doc, s, i) => { doc.text.insertAt(i, ...s) },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === string)
    }
  )
})()

;(() => {
  const benchmarkName = '[B1.3] Prepend N characters]'
  const string = prng.word(gen, N, N)
  const reversedString = string.split('').reverse().join('')
  benchmarkYjs(
    benchmarkName,
    reversedString,
    (doc, s, i) => { doc.getText('text').insert(0, s) },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === string)
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    reversedString,
    (doc, s, i) => { doc.text.insertAt(0, s) },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === string)
    }
  )
})()

;(() => {
  const benchmarkName = '[B1.4] Insert N characters at random positions'
  // calculate random input
  let string = ''
  const input = []
  for (let i = 0; i < N; i++) {
    const index = prng.int31(gen, 0, string.length)
    const insert = prng.word(gen, 1, 1)
    string = string.slice(0, index) + insert + string.slice(index)
    input.push({ index, insert })
  }
  benchmarkYjs(
    benchmarkName,
    input,
    (doc, op, i) => { doc.getText('text').insert(op.index, op.insert) },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === string)
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    input,
    (doc, op, i) => { doc.text.insertAt(op.index, op.insert) },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === string)
    }
  )
})()

;(() => {
  // This test simulates a real-word editing scenario.
  // Users often write a word, and then switch to a different next position.
  const benchmarkName = '[B1.5] Insert N words at random positions'
  // calculate random input
  let string = ''
  const input = []
  for (let i = 0; i < N; i++) {
    const index = prng.int31(gen, 0, string.length)
    const insert = prng.word(gen, 2, 10)
    string = string.slice(0, index) + insert + string.slice(index)
    input.push({ index, insert })
  }
  benchmarkYjs(
    benchmarkName,
    input,
    (doc, op, i) => { doc.getText('text').insert(op.index, op.insert) },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === string)
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    input,
    (doc, op, i) => { doc.text.insertAt(op.index, ...op.insert) },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === string)
    }
  )
})()

;(() => {
  const benchmarkName = '[B1.6] Insert string, then delete it'
  const string = prng.word(gen, N, N)
  // B1.1: Insert text from left to right
  benchmarkYjs(
    benchmarkName,
    [string],
    (doc, s, i) => {
      doc.getText('text').insert(i, s)
      doc.getText('text').delete(i, s.length)
    },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === '')
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    [string],
    (doc, s, i) => {
      doc.text.insertAt(i, ...s)
      doc.text.splice(i, s.length)
    },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === '')
    }
  )
})()

;(() => {
  const benchmarkName = '[B1.7] Insert/Delete at random positions'
  // calculate random input
  let string = ''
  const input = []
  for (let i = 0; i < N; i++) {
    const index = prng.int31(gen, 0, string.length)
    if (string.length === index || prng.bool(gen)) {
      const insert = prng.word(gen, 2, 10)
      string = string.slice(0, index) + insert + string.slice(index)
      input.push({ index, insert })
    } else {
      const deleteCount = prng.int31(gen, 1, math.min(9, string.length - index))
      string = string.slice(0, index) + string.slice(index + deleteCount)
      input.push({ index, deleteCount })
    }
  }
  benchmarkYjs(
    benchmarkName,
    input,
    (doc, op, i) => {
      if (op.insert !== undefined) {
        doc.getText('text').insert(op.index, op.insert)
      } else {
        doc.getText('text').delete(op.index, op.deleteCount)
      }
    },
    (doc1, doc2) => {
      t.assert(doc1.getText('text').toString() === doc2.getText('text').toString())
      t.assert(doc1.getText('text').toString() === string)
    }
  )
  benchmarkAutomerge(
    benchmarkName,
    doc => { doc.text = new Automerge.Text() },
    input,
    (doc, op, i) => {
      if (op.insert !== undefined) {
        doc.text.insertAt(op.index, ...op.insert)
      } else {
        doc.text.splice(op.index, op.deleteCount)
      }
    },
    (doc1, doc2) => {
      t.assert(doc1.text.join('') === doc2.text.join(''))
      t.assert(doc1.text.join('') === string)
    }
  )
})()
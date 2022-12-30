'use strict';

const { watch, promises: { readFile } } = require('fs');

class File {
  watch(event, filename) {
    console.log('this: ', this)
    console.log('arguments: ', Array.prototype.slice.call(arguments))
    this.showContent(filename)
  }

  async showContent(filename) {
    console.log('this: ', this)
    console.log((await readFile(filename)).toString())
  }
}

/* watch(__filename, async (event, filename) => {
  console.log((await readFile(filename)).toString())
}) */

const file = new File()
 // Dessa forma, ele ignora o 'this' da classe File
 // E herda o 'this' do watch
/* watch(__filename, file.watch) */


// Forma menos ideal: Alternativa para não herdar o this da funcao
/* watch(__filename, (event, filename) => file.watch(event, file)) */


// podemos deixar explicito qual é o contexto que a função deve seguir:
// O bind retorna uma função com o this que voce setou
/* watch(__filename, file.watch.bind(file)) */

file.watch.call({showContent: () => console.log('call: hey sinon')}, null, __filename)
file.watch.apply({showContent: () => console.log('call: hey sinon')}, null, __filename)
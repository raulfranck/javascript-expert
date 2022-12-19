class Fibonacci {
  *execute (input, current = 0, next = 1 ) {
    console.count('executou')
    if(input === 0) {
      return 0
    }
    // retorna o valor
    yield current

    // delega a função
    yield* this.execute(-1, next, current + next)
  }
}

module.exports = Fibonacci
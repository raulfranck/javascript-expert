const Fibonacci = require('./fibonacci')
const sinon = require('sinon')
const assert = require('assert')
// fibonacci: next value is the sum of the two last numbers
;(async () => {

  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(fibonacci, fibonacci.execute.name)
    for await (const i of fibonacci.execute(3)) {
      
    }

    //Começa sempre do zero.
    const expectedCount = 4
    assert.deepStrictEqual(spy.callCount, expectedCount)
  }

})()
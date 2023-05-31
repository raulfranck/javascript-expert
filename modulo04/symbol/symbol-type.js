const assert = require('assert')

// -- keys
const uniqueKey = Symbol("userName")
const user = {}

user["userName"] = 'value for normal Objects'
user[uniqueKey] = 'value for symbol'

/* console.log('getting normal Objects:', user.userName)
console.log('getting normal Objects:', user[symbol]) */

assert.deepStrictEqual(user.userName, 'value for normal Objects')

// Sempre único em endereço de memória.
assert.deepStrictEqual(user[Symbol("userName")], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for symbol')


// É dificil de pegar esse valor do symbol mas não é impossivel
console.log('Symbols: ', Object.getOwnPropertySymbols(user)[0])

// byPass = má prática
user[Symbol.for('password')] = 123

assert.deepStrictEqual(user[Symbol.for('password')], 123)

// Well Known Symbols

const obj = {
    // iterators
    [Symbol.iterator]: () => ({
        items: ['c', 'b', 'a'],
        next() {
            return {
                done: this.items.length === 0,
                // remove o ultimo e rtorna
                value: this.items.pop()
            }
        }
    })
}


/* for(const item of obj) {
    console.log('item', item)
} */

assert.deepStrictEqual([...obj], ['a', 'b', 'c'])

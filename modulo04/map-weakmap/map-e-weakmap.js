const assert = require('assert')

const myMap = new Map();

// may have anuthing as a key:
myMap
    .set(1, 'one')
    .set('Raul', {text: 'Value as object'})
    .set(['Key as Array'], 'value as string')
    .set(true, () => 'Key as boolean and value as fuction')

//We can pass keys and values per class constrctor:
const myMapWithConstructor = new Map ([
    ['1', 'string1'],
    [false, () => 'Hello'],
    [true, 2],
    [2, 'Key as number']
])

/* console.log(myMap.get(true)) */
/* console.log('myMap', myMap) */

// pass tests
assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('Raul'), {text: 'Value as object'})

// In objects the key only can be string or symbol
const onlyReferenceWorks = { id: 1 }
myMap.set(onlyReferenceWorks, {name: 'Raul Franck'})

/* console.log('get', myMap.get(onlyReferenceWorks)) */

assert.deepStrictEqual(myMap.get(onlyReferenceWorks), {name: 'Raul Franck'})


// utilitaries:
assert.deepStrictEqual(myMap.size, 5)


// Para verificar se um item existe no objeto: item.key = se não existe retorna = undefined
// O jeito certo em Object é ({name: 'Raul'}).hasOwnProperty('name')

/* console.log(myMap.hasOwnProperty('one')) */

//Para remover, usar delete
assert.ok(myMap.delete(onlyReferenceWorks))

assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1,"one"],["Raul",{"text":"Value as object"}],[["Key as Array"],"value as string"],[true,() => {}]]))

// Iterando com ForOf
for(const [key, value] of myMap) {
    console.log({key, value})
}


// Object é inseguro, pois dependendo do nome da chave, pode substituir algum parametro padrao
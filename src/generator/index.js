// Ejemplo de generador
function* generator() {
    yield 1
    yield 2
    yield 3
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// Iterar un array usando un generador
function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['Andrés', 'Felipe', 'Mariana'])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
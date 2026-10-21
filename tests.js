
const assert = require('node:assert/strict');

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir entre cero');
    }
    return a / b;
}

assert.equal(sumar(2, 3), 5);
assert.equal(restar(5, 3), 2);
assert.equal(multiplicar(4, 3), 12);
assert.equal(dividir(10, 2), 5);
assert.throws(() => dividir(10, 0), /No se puede dividir entre cero/);

console.log('Todas las pruebas pasaron correctamente.');

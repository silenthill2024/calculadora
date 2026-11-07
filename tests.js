const assert = require("node:assert/strict");

const {
    sumar,
    restar,
    multiplicar,
    dividir
} = require("./operaciones.js");

console.log("Iniciando pruebas de la calculadora...");

assert.equal(sumar(5, 3), 8);
console.log("Correcto: suma");

assert.equal(restar(10, 4), 6);
console.log("Correcto: resta");

assert.equal(multiplicar(5, 3), 15);
console.log("Correcto: multiplicacion");

assert.equal(dividir(12, 4), 3);
console.log("Correcto: division");

assert.throws(
    () => dividir(8, 0),
    /No se puede dividir entre cero/
);

console.log("Correcto: division entre cero");

console.log("Todas las pruebas finalizaron correctamente.");
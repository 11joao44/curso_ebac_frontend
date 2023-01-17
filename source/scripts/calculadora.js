const Calculadora = require('./sum');

// console.log
const calculadora = new Calculadora();
console.log('Somando: 10 + 20 =', calculadora.somar(10, 20)); // 30
console.log('Subtraindo: 30 - 10 =', calculadora.subtrair(30, 10)); // 20
console.log('Multiplicando: 10 x 20 =', calculadora.multiplicar(10, 20)); // 200
console.log('Divindo: 100 ÷ 20 =', calculadora.dividir(100, 20)); // 5

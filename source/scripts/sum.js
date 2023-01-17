// Calculadora.js
class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    somar(n1, n2) {
        this.resultado = n1 + n2;
        return this.resultado;
    }

    subtrair(n1, n2) {
        this.resultado = n1 - n2;
        return this.resultado;
    }

    multiplicar(n1, n2) {
        this.resultado = n1 * n2;
        return this.resultado;
    }

    dividir(n1, n2) {
        this.resultado = n1 / n2;
        return this.resultado;
    }
}

module.exports = Calculadora;
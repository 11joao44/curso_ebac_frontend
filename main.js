//Abstração
class DispositivoDeHardware {
    constructor(nome, modelo, preco) {
        
      this.nome = nome;
      this.modelo = modelo;
      this.preco = preco;
    }
  
    exibirDetalhes() {
      console.log(`${this.nome} ${this.modelo} - R$ ${this.preco}`);
    }
  }

// Primeira classe
class Monitor extends DispositivoDeHardware {
    constructor(nome, modelo, preco, tamanho) {
      super(nome, modelo, preco);
      this.tamanho = tamanho;
    }
  
    exibirDetalhes() {
      console.log(`${this.nome} ${this.modelo} - ${this.tamanho} polegadas - R$ ${this.preco}`);
    }
  }
  
// Segunda classe
class Teclado extends DispositivoDeHardware {
    constructor(nome, modelo, preco, tipo) {
      super(nome, modelo, preco);
      this.tipo = tipo;
    }
  
    exibirDetalhes() {
      console.log(`${this.nome} ${this.modelo} - ${this.tipo} - R$ ${this.preco}`);
    }
  }

// 3 instâncias de objetos
const monitor1 = new Monitor('LG', '29UM69G', 1299.90, 29);
const teclado1 = new Teclado('Logitech', 'K120', 49.90, 'com fio');
const monitor2 = new Monitor('AOC', 'G2590PX', 1649.90, 25);
  
monitor1.exibirDetalhes(); // LG 29UM69G - 29 polegadas - R$ 1299.9
teclado1.exibirDetalhes(); // Logitech K120 - com fio - R$ 49.9
monitor2.exibirDetalhes(); // AOC G2590PX - 25 polegadas - R$ 1649.9"
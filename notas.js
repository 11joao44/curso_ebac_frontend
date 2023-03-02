class Aluno {

    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

class Escola {
  constructor() {
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  obterAlunosAprovados(aprovacaoMinima) {
    return this.alunos.filter(function(aluno) { 
      return aluno.nota >= aprovacaoMinima;
    });
  }

  
  obterAlunosReprovados(reprovacaoMaxima) {
    return this.alunos.filter(function(aluno) {
      return aluno.nota < reprovacaoMaxima;
    });
  }
  
}

const escola = new Escola();
escola.adicionarAluno(new Aluno('João', 9.5));
escola.adicionarAluno(new Aluno('Ana', 5.0));
escola.adicionarAluno(new Aluno('Diogo', 7.5));
escola.adicionarAluno(new Aluno('Paula', 6.0));
escola.adicionarAluno(new Aluno('Lucas', 7.0));
escola.adicionarAluno(new Aluno('Leticia', 8.5));
escola.adicionarAluno(new Aluno('Pedro', 5.5));

const alunosAprovados = escola.obterAlunosAprovados(6);
const alunosReprovados = escola.obterAlunosReprovados(6);

console.log('Alunos aprovados:');
alunosAprovados.forEach(function(aluno) {
  console.log(`O aluno(a) ${aluno.nome} ficou com ${aluno.nota} na média`);
});

console.log('Alunos reprovados:');
alunosReprovados.forEach(function(aluno) {
  console.log(`O aluno(a) ${aluno.nome} ficou com ${aluno.nota} na média`);
});

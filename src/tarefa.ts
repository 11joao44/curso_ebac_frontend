  // Criando função de multiplicar dois números e retornar a multiplicação deles no caso da minha tarefa ele subtrai mas a logica segue igual.
  function aplicarDesconto(celular: number, porcentagemDesconto: number): number {
    const decimal = porcentagemDesconto / 100;
    const desconto = celular * decimal;
    const precoComDesconto = celular - desconto;
    return precoComDesconto;
  }
  
  const celular = 8999;
  const porcentagemDesconto = 30;
  
  const precoComDesconto = aplicarDesconto(celular, porcentagemDesconto);
  
  console.log(`O celular custava R$${celular}, mas com desconto de ${porcentagemDesconto}% agora esta custando R$${precoComDesconto}`);


// Criando função de saudação que deverá receber um nome e retornar a concatenação
function saudar(nome: string): string {
    const saudacoes = ["Olá", "Oi", "Oi tudo bem?", "Oi, como vai?"];
    const saudacaoAleatoria = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    return `${saudacaoAleatoria} ${nome} Seja bem-vindo(a)!`;
  }

    const nome = "João";
    const mensagemDeSaudacao = saudar(nome);
    console.log(mensagemDeSaudacao);

  
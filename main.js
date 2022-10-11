const form = document.getElementById('form-deposito');

function validaNome(nomecompleo) {
    const nomeComoArray = nomecompleo.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {        
    let formEvalido = false;
    e.preventDefault();

    const nomeBeneficiário = document.getElementById('nome-beneficiário');
    const numeroContaBeneficiário = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositando para o cliente: ${nomeBeneficiário.value} - conta: ${numeroContaBeneficiário.value}`;
    
    formEvalido = validaNome(nomeBeneficiário.value)
    if (formEvalido) {
        alert(mensagemSucesso);

        nomeBeneficiário.value = '';
        numeroContaBeneficiário.value = '';
        valorDeposito.value = '';
    } else {
        alert("O nome não está completo");
    }
})

console.log(form);
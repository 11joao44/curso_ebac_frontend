$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)

            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },

        messages: {
            nome: 'Adicione seu nome completo',
            email: 'Adicione um E-mail',
            senha: 'Digite uma senha',
            cpf: 'Número CPF incorreto',
            cep: 'Código Postal incorreto'
        }
    })
})

const spans = document.querySelectorAll('.span')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('spanFocus')
}

const handleFocusOut = ({ target }) => {
    
    if (target.value == '') {
        const span = target.previousElementSibling
        span.classList.remove('spanFocus')
    }

}

spans.forEach((input) => input.addEventListener('focus', handleFocus))
spans.forEach((input) => input.addEventListener('focusout', handleFocusOut))
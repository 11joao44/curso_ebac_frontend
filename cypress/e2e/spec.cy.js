/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
  beforeEach(() => {
      // Visitando a página através do link fornecido
      cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve conter 3 inputs e 1 button de adicionar', () => {

      // Verificando se existem 3 elementos input e 1 button na página
      cy.get('input').should('have.length', 3)
      cy.get('.adicionar').should('have.length', 1)
  })

  //.type é usada no Cypress para simular a digitação de texto em um elemento de entrada (input).
  it('Deve adiciona um novo contato', () => {

      // Preenchendo o campo do type text com o valor 'João Pedro'
      cy.get('input[type="text"]').type('Zoro uchiha')
      
      // Preenchendo o campo do type email com o valor 'teste123@gmail.com'
      cy.get('input[type="email"]').type('onepice@gmail.com')

      // Preenchendo o campo do type telefone com o valor '00 999999999'
      cy.get('input[type="tel"]').type('66 666666666')

      // Obtendo elemento com a classe 'adicionar' e realizar o evento de click
      cy.get('.adicionar').click()

      // Tirando o print do teste realizado 
      cy.screenshot('Preenchimento-do-contato')
  })  

  // Verificando se existe o botão de DELETAR e EDITAR em cada contato criado
  it('Deve verificar se existe o botão de DELETAR e EDITAR nos contatos', () => {

      // Pego o elemento com class 'sc-gueYoa' e verifico se existe um button com class 'delete'
      cy.get('.sc-gueYoa button.delete').should('exist')

      // Pego o elemento com class 'sc-gueYoa' e verifico se existe um button com class 'edit'
      cy.get('.sc-gueYoa button.edit').should('exist')
    });

    // Testando a remoção do primeiro contato da agenda
    it('Teste que remove o primeiro contato da agenda', () => {

    // Pego o primeiro elemento com class 'sc-gueYoa' e clico no button com class 'delete'
      cy.get('.sc-gueYoa button.delete').first().click()
    })

    it('Teste para o evento de edição do primeiro contato da agenda', () => {

    // Pego o primeiro elemento com class 'sc-gueYoa' e clico no button com class 'edit'
      cy.get('.sc-gueYoa button.edit').first().click()
    })

    it('Verifica se o campos de edição não estão vazios', () => {
      
      cy.get('input[type="text"]').should('not.be.empty');
      cy.get('input[type="email"]').should('not.be.empty');
      cy.get('input[type="tel"]').should('not.be.empty');
    })
})


// Comando com navegador: npm run cypress open 
// Comandosem navegador: npm run cypress run
// Comando para relatorio: npm run cypress run --reporter mochawesome
/// <reference types="cypress" />
import articles from '../support/pages/articles'

context('Publicação', () => {

    beforeEach(() => {
        cy.backgroundLogin()
    });

    it('Criar uma nova publicação', () => {
        articles.preencherFormulario()
        articles.submeterPublicacao()
        articles.verificarPublicacaoCadastradaComSucesso()

    });
    
});
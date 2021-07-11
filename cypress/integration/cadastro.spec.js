/// <reference types ="cypress"/>
const faker = require('faker')
import Register from '../support/pages/register'
context('Cadastro', () => {

    beforeEach(() => {
        cy.visit("register")
    });

    it('Cadastrar novo usuário', () => {
        Register.preencherFormularioCadastro()
        Register.submeterCadastro()
        Register.verificarCadastroRealizadoComSucesso()

    });
});
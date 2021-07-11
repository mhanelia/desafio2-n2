const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'
class Articles {

    preencherFormulario(){

        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textareaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
        
    }

    submeterPublicacao(){

        cy.get(el.buttonSubmit).click()

    }

    verificarPublicacaoCadastradaComSucesso(){

        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.response.statusCode).to.eq(200)
        })
    }
}
export default new Articles()
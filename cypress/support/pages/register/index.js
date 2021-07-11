const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

let name = faker.name.firstName() + ' ' + faker.name.lastName()

class Register {

    

    preencherFormularioCadastro(){


        cy.get(el.inputUsername).type(name)
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputPassword).type(faker.lorem.word(8))
        
    }

    submeterCadastro(){

        cy.get(el.buttonSubmit).click()

    }

    verificarCadastroRealizadoComSucesso(){

        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
            expect(postUsersResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getFeed}`).then((getFeedResponse) => {
            expect(getFeedResponse.response.statusCode).to.eq(200)
        })

        cy.get(el.userName).should('contain', name)
    }
}
export default new Register()

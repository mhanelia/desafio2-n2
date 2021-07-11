// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import Routes from '../support/routes'
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('backgroundLogin',() => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user:{
                email: 'mail@mail.com.br',
                password: '12345678'
            }
        }
    }).then((loginResponse)=> {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.token)

        cy.visit('editor/',{
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
})

before(() => {
    Routes.init()
})
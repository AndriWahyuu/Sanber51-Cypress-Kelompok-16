// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.Commands.add('login', (email, pass) => {
    cy.get('#email').type('email')
    cy.get('#pass').type('pass')
    cy.get('.action.login.primary').click()
})

Cypress.Commands.add('checkoutShipping', (email, pass) => {

})

Cypress.Commands.add('verifyContain', (locator, value) => {
   cy.get(locator).should('contain', value) //locator = data input yang akan mengeluarkan output nantinya
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
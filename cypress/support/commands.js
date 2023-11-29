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
Cypress.Commands.add('clickCreateAccount', () => {
    cy.visit('');
    cy.contains('Create an Account').click();
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
})

Cypress.Commands.add('login', () => {
    cy.visit('');
    cy.get('.authorization-link').eq(0).click();
    cy.get('#email').type('testingizzah@gmail.com');
    cy.get('#pass').type('Testingizzah123');
    cy.get('.action.login.primary').click()
})

Cypress.Commands.add('addProduct', () => {
    cy.get('.logo').click();
    cy.get('.product-item-link').contains('Radiant Tee').click();
    cy.get('#option-label-size-143-item-166').focus().type('{enter}');
    cy.get('#option-label-color-93-item-50').focus().type('{enter}');
    cy.get('#product-addtocart-button').contains('Add to Cart').click();
    cy.wait(5000);
    cy.get('.message-success').should('be.visible').and('contain', 'You added');
    //cy.get('.action.showcart').click();
    //cy.wait(5000)
})

Cypress.Commands.add('checkoutShipping', () => {
    cy.get(".showcart").should("be.visible").click();
    cy.wait(4000);
    cy.get('#top-cart-btn-checkout').contains('Proceed to Checkout').should("be.visible").click();
    cy.wait(7000);
    cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
})

Cypress.Commands.add('finishShipping', () => {
    cy.get('.button.action.continue.primary').contains('Next').click();
    cy.wait(4000)
    cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
    cy.wait(4000)
    cy.get('.base').should('be.visible').and('contain', 'Thank you for your purchase!');
    cy.get('.action.primary.continue').contains('Continue Shopping').should("be.visible").click();
    cy.wait(4000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/');
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
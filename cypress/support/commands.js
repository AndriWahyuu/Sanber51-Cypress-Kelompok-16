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

Cypress.Commands.add('addProductfromAccountDashboard', () => {
    cy.get('.logo').click();
    cy.get('.product-item-link').contains('Radiant Tee').click();
    cy.get('#option-label-size-143-item-166').click(); 
    cy.get('#option-label-color-93-item-50').focus().type('{enter}');
    cy.get('#product-addtocart-button').contains('Add to Cart').click();
    cy.wait(5000);
    //cy.get('.action.showcart').click();
    //cy.wait(5000)
})

Cypress.Commands.add('checkoutShipping', () => {
    cy.get(".showcart").should("be.visible").click();
    cy.wait(5000);
    cy.get('#top-cart-btn-checkout').contains('Proceed to Checkout').should("be.visible").click();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
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
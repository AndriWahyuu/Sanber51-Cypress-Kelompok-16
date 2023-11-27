const newAccount  = require('../../fixtures/accountFirstOrder.json')
const userDataShipping = require('../../fixtures/userDataShipping.json')
//import "./createAccount.cy.js";
import './createAccount.cy.js'

describe('Verify Proceed to Checkout in First Order', () => {
  beforeEach(() => {
    //cy.visit('');
    //cy.get('.authorization-link').eq(0).click(); //untuk menghindari error can only be called on a single element
    //cy.get('#email').type(newAccount.email);
    //cy.get('#pass').type(newAccount.password);
    //cy.get('.action.login.primary').click();
    
    cy.get('.logo').click();
    cy.get('.product-item-link').contains('Radiant Tee').click();
    cy.get('#option-label-size-143-item-166').click(); 
    cy.get('#option-label-color-93-item-50').click();
    cy.get('.action-tocart-primary').contains('Add to Chart').should("be.visible").click();
    cy.wait(5000);
    cy.get('.action.showcart').click();
    cy.get(".showcart").should("be.visible").click();
    cy.get('.action.primary.checkout').contains('Proceed to Checkout').should("be.visible").click();
    cy.wait(7000)
    cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
  })
  it('1 - First order with Region', () => {
    cy.get('[name="firstname"]').type(userDataShipping.validUser.firstName);
    cy.get('[name="lastname"]').type(userDataShipping.validUser.lastName);
    cy.get('[name="company"]').type(userDataShipping.validUser.company);
    cy.get('[name="street[0]"]').type(userDataShipping.validUser.streetAddress0);
    cy.get('[name="street[1]"]').type(userDataShipping.validUser.streetAddress1);
    cy.get('[name="street[2]"]').type(userDataShipping.validUser.streetAddress2);
    cy.get('[name="city"]').type(userDataShipping.validUser.city);
    cy.get("select").eq(1).select(userDataShipping.validUser.country).invoke("val");
    cy.wait(7000)
    cy.get('[name="region"]').type(userDataShipping.validUser.state);
    cy.get('[name="postcode"]').type(userDataShipping.validUser.postalCode);
    cy.get('[name="telephone"]').type(userDataShipping.validUser.phoneNumber);    
    cy.get('[type="radio"].radio').first().check()
    cy.get('.button.action.continue.primary').contains('Next').should("be.visible").click();
    cy.wait(7000)
    cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
    cy.wait(7000)
  })
})


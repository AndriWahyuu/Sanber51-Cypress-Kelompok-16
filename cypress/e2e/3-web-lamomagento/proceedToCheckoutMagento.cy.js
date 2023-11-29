import {createAccount } from "../../pageObject/createAccountPage.js"; 
import {checkout} from '../../pageObject/proceedToCheckoutPage.js'
import newAccount from "../../fixtures/newAccount.json"; 
const userDataShipping = require('../../fixtures/userDataShipping.json')
 
describe("Verify Proceed to Checkout in First Order", () => { 
    beforeEach(() => { 
      cy.clickCreateAccount();
      createAccount.createNewAccount( 
        newAccount.registration.userValid.firstName, 
        newAccount.registration.userValid.lastName, 
        Date.now() + newAccount.registration.userValid.email, 
        newAccount.registration.userValid.password 
      );
      cy.addProduct();
      cy.checkoutShipping();
    }); 
  
    it('First order with Region', () => { 
        checkout.orderCheckoutRegion(
          userDataShipping.validUser[0].firstName,
          userDataShipping.validUser[0].lastName, 
          userDataShipping.validUser[0].company,
          userDataShipping.validUser[0].streetAddress0,
          userDataShipping.validUser[0].streetAddress1,
          userDataShipping.validUser[0].streetAddress2,
          userDataShipping.validUser[0].city,
          userDataShipping.validUser[0].country,
          userDataShipping.validUser[0].state,
          userDataShipping.validUser[0].postalCode,
          userDataShipping.validUser[0].phoneNumber)
    });

    it('First order with Region ID', () => { 
      checkout.orderCheckoutRegionID(
        userDataShipping.validUser[1].firstName,
        userDataShipping.validUser[1].lastName, 
        userDataShipping.validUser[1].company,
        userDataShipping.validUser[1].streetAddress0,
        userDataShipping.validUser[1].streetAddress1,
        userDataShipping.validUser[1].streetAddress2,
        userDataShipping.validUser[1].city,
        userDataShipping.validUser[1].country,
        userDataShipping.validUser[1].state,
        userDataShipping.validUser[1].postalCode,
        userDataShipping.validUser[1].phoneNumber)
    });

    it.skip('First order but change the shipping address/method with Region', () => { 
      checkout.orderCheckoutRegion(
        userDataShipping.validUser[0].firstName,
        userDataShipping.validUser[0].lastName, 
        userDataShipping.validUser[0].company,
        userDataShipping.validUser[0].streetAddress0,
        userDataShipping.validUser[0].streetAddress1,
        userDataShipping.validUser[0].streetAddress2,
        userDataShipping.validUser[0].city,
        userDataShipping.validUser[0].country,
        userDataShipping.validUser[0].state,
        userDataShipping.validUser[0].postalCode,
        userDataShipping.validUser[0].phoneNumber)
      cy.get('.button.action.continue.primary').contains('Next').click();
      cy.wait(7000)
      cy.get('.action.action-edit').eq(0).click();
      checkout.clearOrderCheckoutRegion(
        userDataShipping.validUser[0].firstName,
        userDataShipping.validUser[0].lastName, 
        userDataShipping.validUser[0].company,
        userDataShipping.validUser[0].streetAddress0,
        userDataShipping.validUser[0].streetAddress1,
        userDataShipping.validUser[0].streetAddress2,
        userDataShipping.validUser[0].city,
        userDataShipping.validUser[0].country,
        userDataShipping.validUser[0].state,
        userDataShipping.validUser[0].postalCode,
        userDataShipping.validUser[0].phoneNumber)
      cy.get('.button.action.continue.primary').contains('Next').click();
    });

    it.skip('First order but change the shipping address/method with Region', () => { 
      checkout.orderCheckoutRegionID(
        userDataShipping.validUser[1].firstName,
        userDataShipping.validUser[1].lastName, 
        userDataShipping.validUser[1].company,
        userDataShipping.validUser[1].streetAddress0,
        userDataShipping.validUser[1].streetAddress1,
        userDataShipping.validUser[1].streetAddress2,
        userDataShipping.validUser[1].city,
        userDataShipping.validUser[1].country,
        userDataShipping.validUser[1].state,
        userDataShipping.validUser[1].postalCode,
        userDataShipping.validUser[1].phoneNumber)
      cy.get('.button.action.continue.primary').contains('Next').click();
      cy.wait(7000)
      cy.get('.action.action-edit').eq(0).click();
      checkout.clearOrderCheckoutRegionID(
        userDataShipping.validUser[1].firstName,
        userDataShipping.validUser[1].lastName, 
        userDataShipping.validUser[1].company,
        userDataShipping.validUser[1].streetAddress0,
        userDataShipping.validUser[1].streetAddress1,
        userDataShipping.validUser[1].streetAddress2,
        userDataShipping.validUser[1].city,
        userDataShipping.validUser[1].country,
        userDataShipping.validUser[1].state,
        userDataShipping.validUser[1].postalCode,
        userDataShipping.validUser[1].phoneNumber)
      cy.get('.button.action.continue.primary').contains('Next').click();
    });

    afterEach(() => {
      cy.shippingMethod();
      cy.finishDataShipping(); 
      cy.finishShipping();
    }); 
   
});

describe("Verify Proceed to Checkout in Next Order", () => { 
  beforeEach(() => { 
    cy.login();
    cy.addProduct();
    cy.checkoutShipping();
  }); 

  it('Next order add the shipping address with Region', () => { 
    cy.get('.action.action-show-popup').contains('New Address').click();
    cy.wait(2000)
    checkout.orderCheckoutRegion(
      userDataShipping.validUser[0].firstName,
      userDataShipping.validUser[0].lastName, 
      userDataShipping.validUser[0].company,
      userDataShipping.validUser[0].streetAddress0,
      userDataShipping.validUser[0].streetAddress1,
      userDataShipping.validUser[0].streetAddress2,
      userDataShipping.validUser[0].city,
      userDataShipping.validUser[0].country,
      userDataShipping.validUser[0].state,
      userDataShipping.validUser[0].postalCode,
      userDataShipping.validUser[0].phoneNumber)
    cy.get('.action.primary.action-save-address').contains('Ship here').click();
    cy.wait(2000)
  });

  it(' Next order add the shipping address with RegionID', () => { 
    cy.get('.action.action-show-popup').contains('New Address').click();
    cy.wait(2000)
    checkout.orderCheckoutRegionID(
      userDataShipping.validUser[1].firstName,
      userDataShipping.validUser[1].lastName, 
      userDataShipping.validUser[1].company,
      userDataShipping.validUser[1].streetAddress0,
      userDataShipping.validUser[1].streetAddress1,
      userDataShipping.validUser[1].streetAddress2,
      userDataShipping.validUser[1].city,
      userDataShipping.validUser[1].country,
      userDataShipping.validUser[1].state,
      userDataShipping.validUser[1].postalCode,
      userDataShipping.validUser[1].phoneNumber)
    cy.get('.action.primary.action-save-address').contains('Ship here').click();
    cy.wait(2000)
  });

  it('Change the shipping address', () => { 
    cy.get('.action.action-select-shipping-item').eq(1).contains('Ship Here').click();
    cy.wait(1000)
  });

  afterEach(() => {
    cy.shippingMethod();
    cy.finishDataShipping(); 
    cy.finishShipping();
  }); 
 
});

describe("Verify Proceed to Checkout with Apply Discount", () => { 
  beforeEach(() => { 
    cy.login();
    cy.addProduct();
    cy.checkoutShipping();
    cy.shippingMethod();
    cy.finishDataShipping(); 
  }); 

  it('Apply Invalid Discount', () => { 
    cy.get('#block-discount-heading').contains('Apply Discount Code').click();
    cy.wait(1000)
    cy.get('[name="discount_code"]').type('diskon');
    cy.get('.action.action-apply').contains('Apply Discount').click();
    cy.wait(4000)
    cy.get('.message.message-error.error').should('be.visible').and('contain', 'Verify the code and try again.');
  });

  afterEach(() => {
    cy.finishShipping();
  }); 
 
});

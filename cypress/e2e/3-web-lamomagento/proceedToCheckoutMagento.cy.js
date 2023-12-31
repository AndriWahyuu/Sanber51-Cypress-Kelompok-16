import {createAccount } from "../../pageObject/createAccountPage.js"; 
import {checkout} from '../../pageObject/proceedToCheckoutPage.js'
import {checkoutWithoutLogin} from '../../pageObject/proceedToCheckoutPage.js'
import {button} from '../../pageObject/proceedToCheckoutPage.js'
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
      //cy.addProduct();
      button.addProduct();
      //cy.checkoutShipping();
      button.checkoutShipping();
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
        button.shippingMethod();
        button.finishDataShipping();
        button.placeOrder();
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
      button.shippingMethod();
      button.finishDataShipping();
      button.placeOrder();
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
      button.finishDataShipping();
      //cy.get('.action.action-edit').eq(0).click();
      button.changeThisAddress();
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
      button.finishDataShipping();
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
      button.finishDataShipping();
      //cy.get('.action.action-edit').eq(0).click();
      button.changeThisAddress();
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
      button.finishDataShipping();
    });

    it('First order with Region ID Continue Shipping', () => { 
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
      button.shippingMethod();
      button.finishDataShipping();
      button.placeOrder();
      button.continueShipping();
    });

    it('First order with Region ID Print Receipt', () => { 
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
      button.shippingMethod();
      button.finishDataShipping();
      button.placeOrder();
      button.printReceipt();
    });

    it('First order with Region ID Check Order', () => { 
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
      button.shippingMethod();
      button.finishDataShipping();
      button.placeOrder();
      button.checkSummary();
    });

    it('First order with Region ID Apply Invalid Discount', () => { 
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
      button.shippingMethod();
      button.finishDataShipping();
      button.applyDiscountCode();
      cy.get('[name="discount_code"]').type('diskon');
      button.applyDiscount();
      cy.get('.message.message-error.error').should('be.visible').and('contain', 'Verify the code and try again.');
      button.placeOrder();
    });

  it('First order Invalid Shipping Method', () => { 
    checkout.orderCheckoutRegionID(
      userDataShipping.validUser[1].firstName,
      userDataShipping.validUser[1].lastName, 
      userDataShipping.validUser[1].company,
      userDataShipping.validUser[1].streetAddress1,
      userDataShipping.validUser[1].streetAddress1,
      userDataShipping.validUser[1].streetAddress2,
      userDataShipping.validUser[1].city,
      userDataShipping.validUser[1].country,
      userDataShipping.validUser[1].state,
      userDataShipping.validUser[1].postalCode,
      userDataShipping.validUser[1].phoneNumber)
    //button.shippingMethod();
    button.finishDataShipping();
    cy.get('#co-shipping-method-form > .message').should('be.visible').and('contain', 'The shipping method is missing. Select the shipping method and try again.'); //butuh assertion//
  });

  it('First order Invalid Postal Code', () => { 
    checkout.orderCheckoutRegionID(
      userDataShipping.invalidUser[0].firstName,
      userDataShipping.invalidUser[0].lastName, 
      userDataShipping.invalidUser[0].company,
      userDataShipping.invalidUser[0].streetAddress0,
      userDataShipping.invalidUser[0].streetAddress0,
      userDataShipping.invalidUser[0].streetAddress2,
      userDataShipping.invalidUser[0].city,
      userDataShipping.invalidUser[0].country,
      userDataShipping.invalidUser[0].state,
      userDataShipping.invalidUser[0].postalCode,
      userDataShipping.invalidUser[0].phoneNumber)
    button.shippingMethod();
    cy.get('.control > .message').should('be.visible').and('contain', 'Provided Zip/Postal Code seems to be invalid.');
  });

  it('First order with Region Unchecklist Address', () => { 
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
    button.shippingMethod();
    button.finishDataShipping();
    button.uncheckAddress();
    button.placeOrderDisable();
  });

  it('First order with Different Address', () => { 
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
    button.shippingMethod();
    button.finishDataShipping();
    button.uncheckAddress();
    checkout.orderCheckoutRegionUpdate(
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
    button.updateAddress();
    button.placeOrder();
  });

});

describe("Verify Proceed to Checkout in Next Order", () => { 
  beforeEach(() => { 
    cy.login();
    //cy.addProduct();
    button.addProduct();
    //cy.checkoutShipping();
    button.checkoutShipping();
  });
  
  it('Next Order Succesfully', () => { 
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
  });

  it('Next Order Continue Shipping', () => { 
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
    button.continueShipping();
  });

  it('Next Order Print Receipt', () => { 
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
    button.printReceipt();
  });

  it('Next Order Check Order', () => { 
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
    button.checkSummary();
  });

  it('Next Order Apply Invalid Discount', () => { 
    button.shippingMethod();
    button.finishDataShipping();
    button.applyDiscountCode();
    cy.get('[name="discount_code"]').type('diskon');
    button.applyDiscount();
    cy.get('.message.message-error.error').should('be.visible').and('contain', 'Verify the code and try again.');
    button.placeOrder();
  });

  it('Next order add the shipping address with Region', () => { 
    button.addNewAddressShipping();
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
    button.saveAddNewAddress();
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
  });

  it(' Next order add the shipping address with RegionID', () => { 
    button.addNewAddressShipping();
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
    button.saveAddNewAddress();
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
  });

  //sudah ditambahkan data shipping baru
  it('Change the shipping address', () => { 
    button.changeAddressShipping();
    button.finishDataShipping();
    button.placeOrder();
  });

  it('Next Order Unchecklist Address', () => { 
    button.shippingMethod();
    button.finishDataShipping();
    button.uncheckAddress();
    button.placeOrderDisable();
  });
 
});

describe("Verify Proceed to Checkout Without Login", () => { 
  beforeEach(() => { 
    cy.visit('');
    //cy.addProduct();
    checkoutWithoutLogin.addProduct();
    //cy.checkoutShipping();
    button.checkoutShipping();
  }); 

  it('Checkout Succesfully without Recent Account', () => { 
    checkoutWithoutLogin.noRecentAccount();
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
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
  });

  it('Checkout Succesfully with Recent Account', () => { 
    checkoutWithoutLogin.recentAccount();
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
    button.shippingMethod();
    button.finishDataShipping();
    button.placeOrder();
  });

  it('Checkout Succesfully without Recent Account', () => { 
    checkoutWithoutLogin.noRecentAccount();
    checkout.orderCheckoutRegionID(
      userDataShipping.validUser[1].firstName,
      userDataShipping.validUser[1].lastName, 
      userDataShipping.validUser[1].company,
      userDataShipping.validUser[1].streetAddress1,
      userDataShipping.validUser[1].streetAddress1,
      userDataShipping.validUser[1].streetAddress2,
      userDataShipping.validUser[1].city,
      userDataShipping.validUser[1].country,
      userDataShipping.validUser[1].state,
      userDataShipping.validUser[1].postalCode,
      userDataShipping.validUser[1].phoneNumber)
    //button.shippingMethod();
    button.finishDataShipping();
    cy.get('#co-shipping-method-form > .message').should('be.visible').and('contain', 'The shipping method is missing. Select the shipping method and try again.');
  });

})
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
    cy.addProductfromAccountDashboard();
    cy.checkoutShipping();
  }); 
 
  it('1 - First order with Region', () => { 
      checkout.firstOrderCheckout(userDataShipping.validUser.firstName,
        userDataShipping.lastName, 
        userDataShipping.validUser.company,
        userDataShipping.validUser.streetAddress0,
        userDataShipping.validUser.streetAddress1,
        userDataShipping.validUser.streetAddress2,
        userDataShipping.validUser.city,
        userDataShipping.validUser.state,
        userDataShipping.validUser.postalCode,
        userDataShipping.validUser.country,
        userDataShipping.validUser.phoneNumber)
  }); 
});


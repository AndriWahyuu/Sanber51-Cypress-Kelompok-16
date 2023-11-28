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
        checkout.firstOrderCheckoutRegion(
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

    it('2 - First order with Region ID', () => { 
      checkout.firstOrderCheckoutRegionID(
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

    it('3 - First order but change the shipping address/method with Region', () => { 
      checkout.firstOrderCheckoutRegionchangeData(
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

    it('4 - First order but change the shipping address/method with Region', () => { 
      checkout.firstOrderCheckoutRegionID(
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
   
});

describe("Verify Proceed to Checkout in First Order", () => { 
  beforeEach(() => { 
    
    cy.addProductfromAccountDashboard();
    cy.checkoutShipping();
  }); 

  it('1 - First order with Region', () => { 

  });

  it('2 - First order with Region ID', () => { 

  });

  it('3 - First order but change the shipping address/method with Region', () => { 

  });

  it('3 - First order but change the shipping address/method with Region', () => { 

  });
 
});

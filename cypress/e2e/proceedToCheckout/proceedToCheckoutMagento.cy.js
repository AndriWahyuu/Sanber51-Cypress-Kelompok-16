const userData          = require('../../fixtures/userData.json')
const userDataShipping  = require('../../fixtures/userDataShipping.json')

describe('Verify Procees to Checkout', () => {
  beforeEach(() => {

    cy.visit('');
    cy.get('.authorization-link').eq(0).click(); //untuk menghindari error can only be called on a single element
    cy.get('#email').type('testingizzah@gmail.com');
    cy.get('#pass').type('Testingizzah123');
    cy.get('.action.login.primary').click();
    cy.get('.action.showcart').click();
    cy.get(".showcart").should("be.visible").click();
  })
  it('Terdapat produk yang akan dibeli di keranjang dan belum memasukkan data checkout', () => {
    cy.get('.action.primary.checkout').contains('Proceed to Checkout').should("be.visible").click();
    cy.wait(5000)
    cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
    cy.get('[name="firstname"]').type(userDataShipping.validUser.firstName);
    cy.get('[name="lastname"]').type(userDataShipping.validUser.lastName);
    cy.get('[name="company"]').type(userDataShipping.validUser.company);
    cy.get('[name="street[0]"]').type(userDataShipping.validUser.streetAddress0);
    cy.get('[name="street[1]"]').type(userDataShipping.validUser.streetAddress1);
    cy.get('[name="street[2]"]').type(userDataShipping.validUser.streetAddress2);
    cy.get('[name="city"]').type(userDataShipping.validUser.city);
    cy.get('[name="region_id"]').type(userDataShipping.validUser.state);
    cy.get('[name="postcode"]').type(userDataShipping.validUser.postalCode);
    cy.get('[name="country_id"]').type(userDataShipping.validUser.country);
    cy.get('[name="telephone"]').type(userDataShipping.validUser.phoneNumber);    

  })
})
import newAccount from "../fixtures/newAccount.json"; 

export class button {
    static addProduct(){
        cy.get('.logo').click();
        cy.get('.product-item-link').contains('Radiant Tee').click();
        cy.get('[id="option-label-size-143-item-166"]').click()
        cy.wait(10000)
        cy.get('[id="option-label-color-93-item-50"]').click()
        cy.wait(10000)
        cy.get('#product-addtocart-button').contains('Add to Cart').click();
        cy.wait(10000);
        cy.get('.message-success').should('be.visible').and('contain', 'You added');
        //cy.get('.action.showcart').click();
        //cy.wait(5000)
    }

    static checkoutShipping(){
        cy.get(".showcart").should("be.visible").click();
        cy.wait(7000);
        cy.get('#top-cart-btn-checkout').contains('Proceed to Checkout').should("be.visible").click();
        cy.wait(7000);
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
        cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping');
    }

    static shippingMethod(){
        cy.get('[type="radio"].radio').first().check()
    }

    static finishDataShipping(){ //finish data address and shipping method
        cy.get('.button.action.continue.primary').contains('Next').click();
        cy.wait(10000)
    }

    static changeThisAddress(){
     cy.get('.action.action-edit').eq(0).click();   
    }

    static addNewAddressShipping(){
        cy.get('.action.action-show-popup').contains('New Address').click();
        cy.wait(2000)
    }

    static saveAddNewAddress(){
        cy.get('.action.primary.action-save-address').contains('Ship here').click();
        cy.wait(2000)
    }

    static changeAddressShipping(){
        cy.get('.action.action-select-shipping-item').eq(1).contains('Ship Here').click();
        cy.wait(10000)
    } // in some address (checklist)

    static uncheckAddress(){
        cy.get('input#billing-address-same-as-shipping-checkmo', { timeout: 10000 }).check()
        cy.get('input#billing-address-same-as-shipping-checkmo', { timeout: 10000 }).uncheck()
    }

    static updateAddress(){
        cy.get('.action-update').contains('Update').should("be.visible").click();
    }
    static placeOrder(){
        cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
        cy.wait(7000)
        cy.get('.base').should('be.visible').and('contain', 'Thank you for your purchase!');
    }

    static placeOrderDisable(){
        cy.get('.action.primary.checkout.disabled').should('exist');
    }

    static applyDiscountCode(){
        cy.get('#block-discount-heading').contains('Apply Discount Code').click();
        cy.wait(10000)
    }

    static applyDiscount(){
        cy.get('.action.action-apply').contains('Apply Discount').click();
        cy.wait(4000)
    }

    static printReceipt(){
        cy.get('.action.print').contains('Print receipt').click();
    }

    static checkSummary(){
        cy.get('.order-number').click();
    }

    static continueShipping() {
        cy.get('.action.primary.continue').contains('Continue Shopping').should("be.visible").click();
        cy.wait(7000)
        cy.url().should('include', 'https://magento.softwaretestingboard.com/');
    }

}

export class checkout {
    static orderCheckoutRegion (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="company"]').type(company);
        cy.get('[name="street[0]"]').type(streetAddress0);
        cy.get('[name="street[1]"]').type(streetAddress1);
        cy.get('[name="street[2]"]').type(streetAddress2);
        cy.get('[name="city"]').type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(4000)
        cy.get('[name="region"]').type(state);
        cy.get('[name="postcode"]').type(postalCode);
        cy.get('[name="telephone"]').type(phoneNumber);    
    }
    
    static orderCheckoutRegionID (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="company"]').type(company);
        cy.get('[name="street[0]"]').type(streetAddress0);
        cy.get('[name="street[1]"]').type(streetAddress1);
        cy.get('[name="street[2]"]').type(streetAddress2);
        cy.get('[name="city"]').type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(2000)
        cy.get("select").eq(0).select(state).invoke("val");
        cy.wait(2000)
        cy.get('[name="postcode"]').type(postalCode);
        cy.get('[name="telephone"]').type(phoneNumber);    
    }

    static clearOrderCheckoutRegion (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="company"]').clear().type(company);
        cy.get('[name="street[0]"]').clear().type(streetAddress0);
        cy.get('[name="street[1]"]').clear().type(streetAddress1);
        cy.get('[name="street[2]"]').clear().type(streetAddress2);
        cy.get('[name="city"]').clear().type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(4000)
        cy.get('[name="region"]').clear().type(state);
        cy.get('[name="postcode"]').clear().type(postalCode);
        cy.get('[name="telephone"]').clear().type(phoneNumber);    
    }

    static clearOrderCheckoutRegionID (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').clear().type(firstName);
        cy.get('[name="lastname"]').clear().type(lastName);
        cy.get('[name="company"]').clear().type(company);
        cy.get('[name="street[0]"]').clear().type(streetAddress0);
        cy.get('[name="street[1]"]').clear().type(streetAddress1);
        cy.get('[name="street[2]"]').clear().type(streetAddress2);
        cy.get('[name="city"]').clear().type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(2000)
        cy.get("select").eq(0).select(state).invoke("val");
        cy.wait(2000)
        cy.get('[name="postcode"]').clear().type(postalCode);
        cy.get('[name="telephone"]').clear().type(phoneNumber);    
    }
    
    static nextOrderAddNewAddressRegion () {
        cy.get('.action.action-show-popup').contains('New Address').click();
        cy.wait(7000)
    }

    static orderCheckoutRegionUpdate (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').eq(1).type(firstName);
        cy.get('[name="lastname"]').eq(1).type(lastName);
        cy.get('[name="company"]').eq(1).type(company);
        cy.get('[name="street[0]"]').eq(1).type(streetAddress0);
        cy.get('[name="street[1]"]').eq(1).type(streetAddress1);
        cy.get('[name="street[2]"]').eq(1).type(streetAddress2);
        cy.get('[name="city"]').eq(1).type(city);
        cy.get("select").eq(3).select(country).invoke("val");
        cy.wait(4000)
        cy.get('[name="region"]').eq(1).type(state);
        cy.get('[name="postcode"]').eq(1).type(postalCode);
        cy.get('[name="telephone"]').eq(1).type(phoneNumber);    
    }
    
}

export class checkoutWithoutLogin {
    static noRecentAccount(){
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').should('be.visible').type(Date.now() + newAccount.registration.userValid.email );
        cy.wait(2000);
    }

    static recentAccount(){
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').should('be.visible').type('testingizzah@gmail.com');
        cy.wait(2000);
        cy.get('#customer-password').should('be.visible').type('Testingizzah123');
        cy.wait(2000);
        //cy.get('#customer-email-fieldset > .fieldset > .actions-toolbar > div.primary > .action').click();   
    }

    static addProduct() {
        cy.get('.product-item-link').contains('Radiant Tee').click();
        cy.get('[id="option-label-size-143-item-166"]').click()
        cy.wait(10000)
        cy.get('[id="option-label-color-93-item-50"]').click()
        cy.wait(10000)
        cy.get('#product-addtocart-button').contains('Add to Cart').click();
        cy.wait(10000);
        cy.get('.message-success').should('be.visible').and('contain', 'You added');   
    }
}

    export default checkout;
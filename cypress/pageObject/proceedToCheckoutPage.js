export class checkout {
    static firstOrderCheckout (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="company"]').type(company);
        cy.get('[name="street[0]"]').type(streetAddress0);
        cy.get('[name="street[1]"]').type(streetAddress1);
        cy.get('[name="street[2]"]').type(streetAddress2);
        cy.get('[name="city"]').type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(7000)
        cy.get('[name="region"]').type(state);
        cy.get('[name="postcode"]').type(postalCode);
        cy.get('[name="telephone"]').type(phoneNumber);    
        cy.get('[type="radio"].radio').first().check()
        cy.get('.button.action.continue.primary').contains('Next').click();
        cy.wait(7000)
        cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
        cy.wait(7000)
    }
}
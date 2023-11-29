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
}
export class checkout {
    static firstOrderCheckoutRegion (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
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
        cy.get('.base').should('be.visible').and('contain', 'Thank you for your purchase!');
        cy.get('.action.primary.continue').contains('Continue Shopping').should("be.visible").click();
        cy.wait(7000)
        cy.url().should('include', 'https://magento.softwaretestingboard.com/');
    }
    
    static firstOrderCheckoutRegionID (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="company"]').type(company);
        cy.get('[name="street[0]"]').type(streetAddress0);
        cy.get('[name="street[1]"]').type(streetAddress1);
        cy.get('[name="street[2]"]').type(streetAddress2);
        cy.get('[name="city"]').type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(7000)
        cy.get("select").eq(0).select(state).invoke("val");
        cy.wait(7000)
        cy.get('[name="postcode"]').type(postalCode);
        cy.get('[name="telephone"]').type(phoneNumber);    
        cy.get('[type="radio"].radio').first().check()
        cy.get('.button.action.continue.primary').contains('Next').click();
        cy.wait(7000)
        cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
        cy.wait(7000)
        cy.get('.base').should('be.visible').and('contain', 'Thank you for your purchase!');
        cy.get('.action.primary.continue').contains('Continue Shopping').should("be.visible").click();
        cy.wait(7000)
        cy.url().should('include', 'https://magento.softwaretestingboard.com/');
    }

    static firstOrderCheckoutRegionchangeData (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
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
        cy.get('.action.action-edit').eq(0).click();
        cy.get('[name="firstname"]').clear().type(firstName);
        cy.get('[name="lastname"]').clear().type(lastName);
        cy.get('[name="company"]').clear().type(company);
        cy.get('[name="street[0]"]').clear().type(streetAddress0);
        cy.get('[name="street[1]"]').clear().type(streetAddress1);
        cy.get('[name="street[2]"]').clear().type(streetAddress2);
        cy.get('[name="city"]').clear().type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(7000)
        cy.get('[name="region"]').clear().type(state);
        cy.get('[name="postcode"]').clear().type(postalCode);
        cy.get('[name="telephone"]').clear().type(phoneNumber);    
        cy.get('[type="radio"].radio').first().check()
        cy.get('.button.action.continue.primary').contains('Next').click();
        cy.wait(7000)
        cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
        cy.wait(7000)
        cy.get('.base').and('contain', 'Thank you for your purchase!');
        cy.get('.action.primary.continue').contains('Continue Shopping').should("be.visible").click();
        cy.wait(7000)
        cy.url().should('include', 'https://magento.softwaretestingboard.com/');
    }

    static firstOrderCheckoutRegionIDchangeData (firstName, lastName, company, streetAddress0, streetAddress1, streetAddress2, city, country, state, postalCode, phoneNumber) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="company"]').type(company);
        cy.get('[name="street[0]"]').type(streetAddress0);
        cy.get('[name="street[1]"]').type(streetAddress1);
        cy.get('[name="street[2]"]').type(streetAddress2);
        cy.get('[name="city"]').type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(7000)
        cy.get("select").eq(0).select(state).invoke("val");
        cy.wait(7000)
        cy.get('[name="postcode"]').type(postalCode);
        cy.get('[name="telephone"]').type(phoneNumber);    
        cy.get('[type="radio"].radio').first().check()
        cy.get('.button.action.continue.primary').contains('Next').click();
        cy.wait(7000)
        cy.get('.action.action-edit').eq(0).click();
        cy.get('[name="firstname"]').clear().type(firstName);
        cy.get('[name="lastname"]').clear().type(lastName);
        cy.get('[name="company"]').clear().type(company);
        cy.get('[name="street[0]"]').clear().type(streetAddress0);
        cy.get('[name="street[1]"]').clear().type(streetAddress1);
        cy.get('[name="street[2]"]').clear().type(streetAddress2);
        cy.get('[name="city"]').clear().type(city);
        cy.get("select").eq(1).select(country).invoke("val");
        cy.wait(7000)
        cy.get("select").eq(0).select(state).invoke("val");
        cy.wait(7000)
        cy.get('[name="postcode"]').clear().type(postalCode);
        cy.get('[name="telephone"]').clear().type(phoneNumber);    
        cy.get('[type="radio"].radio').first().check()
        cy.get('.button.action.continue.primary').contains('Next').click();
        cy.wait(7000)
        cy.get('.action.primary.checkout').contains('Place Order').should("be.visible").click();
        cy.wait(7000)
        cy.get('.base').should('be.visible').and('contain', 'Thank you for your purchase!');
        cy.get('.action.primary.continue').contains('Continue Shopping').should("be.visible").click();
        cy.wait(7000)
        cy.url().should('include', 'https://magento.softwaretestingboard.com/');
    }
    
}
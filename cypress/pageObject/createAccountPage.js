export class createAccount {
    static createNewAccount (firstName, lastName, email, password) {
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').eq(0).type(password)
        cy.get('[name="password_confirmation"]').type(password)
        cy.get('.action.submit.primary').contains('Create an Account').should("be.visible").click();
        //cy.writeFile('cypress/fixtures/accountFirstOrder.json', {firstname: user.firstname, lastame: user.lastname, email: user.email, password: user.password})//write file .json data for this account
    }

    static message(message, timeOut){
        cy.contains(message).should('exist')
        cy.wait(timeOut)
    }    
}


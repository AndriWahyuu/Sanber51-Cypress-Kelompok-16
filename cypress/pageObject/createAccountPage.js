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

export class createAccountforFirstOrder {
    static createAccountforFirstOrder () {
        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com" //create random email
        const user = {
          firstname : 'SanbercodeQA',
          lastname  : '51-16',
          email     : randomEmail,
          password  : 'S@nbercodeQA51-16',
        }
    
        cy.visit('')
        cy.contains('Create an Account').click();
        cy.get('[name="firstname"]').type(user.firstname);
        cy.get('[name="lastname"]').type(user.lastname);
        cy.get('[name="email"]').type(user.email);
        cy.get('[name="password"]').eq(0).type(user.password)
        cy.get('[name="password_confirmation"]').type(user.password)
        cy.get('.action.submit.primary').contains('Create an Account').should("be.visible").click();
        cy.writeFile('cypress/fixtures/accountFirstOrder.json', {firstname: user.firstname, lastame: user.lastname, email: user.email, password: user.password})     //write file .json data for this account
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/') // ensure register page sends you /home after register
    }
}
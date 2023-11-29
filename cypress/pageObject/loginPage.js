export class login {
    static login (email, password) {
        cy.get('#email').type(email)
        cy.get('#pass').type(password)
        cy.get('.action.login.primary').click()
    }
}
describe('Login Verivication Test', () => {
  it('Login failed', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('Sign In').click()
    cy.get('.authorization-link').eq(0).click()
    cy.get('#email').type('agung@test.com')
    cy.get('#pass').type('test12345')
    cy.get('.action.login.primary').click()
    cy.get('.message-error').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('')
    cy.contains('Create an Account').click()
    cy.get('#firstNam')
  })
})
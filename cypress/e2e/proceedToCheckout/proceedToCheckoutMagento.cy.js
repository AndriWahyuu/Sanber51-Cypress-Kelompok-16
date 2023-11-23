describe('Verify Procees to Checkout', () => {
  beforeEach(() => {

    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.authorization-link').eq(0).click() //untuk menghindari error can only be called on a single element
    cy.get('#email').type('testizzah@gmail.com')
    cy.get('#pass').type('Testizzah123')
    cy.get('.action.login.primary').click()
    cy.get('.action.showcart').click()
    //cy.get('.action.primary.checkout').click()
    //cy.get('#top-cart-btn-checkout').click()
  
  })
  it('passes', () => {
    

  })
})
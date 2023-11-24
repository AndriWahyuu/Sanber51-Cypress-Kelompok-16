describe('Verify Procees to Checkout', () => {
  beforeEach(() => {

    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.authorization-link').eq(0).click() //untuk menghindari error can only be called on a single element
    cy.get('#email').type('testingizzah@gmail.com')
    cy.get('#pass').type('Testingizzah123')
    cy.get('.action.login.primary').click()
    cy.get('.action.showcart').click()
    //cy.get('#top-cart-btn-checkout').click()
    //cy.get('.action.primary.checkout').click({force: true})
    cy.get(".showcart").should("be.visible").click();
  })
  it('Terdapat produk yang akan dibeli di keranjang dan belum memasukkan data checkout', () => {
    cy.get(".checkout-methods-items > :nth-child(1) > .action").should("be.visible").click();
    //cy.url().should('include', '/checkout/#shipping.html')      
  })
})
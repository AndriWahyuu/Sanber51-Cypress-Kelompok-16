describe('Verify Search Functionally', () => {

  beforeEach(() => {
    cy.visit('');
    cy.get('.authorization-link').eq(0).click(); //untuk menghindari error can only be called on a single element
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#pass').type(Cypress.env('pass'));
    cy.get('.action.login.primary').click();
  })

  it('Search for Available Product', () => {
    cy.get('#search').type('Breathe-Easy Tank{enter}');

  })

  it('Search for Product that are not available', () => {
    cy.get('#search').type('Indomie{enter}');

  })

  it('Search Product with only 1 letter', () => {
    cy.get('#search').type('a{enter}');
    
  })

})
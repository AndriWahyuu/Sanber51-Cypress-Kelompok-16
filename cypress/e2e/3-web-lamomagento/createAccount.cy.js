import {createAccount} from '../../pageObject/createAccountPage.js'
import newAccount from '../../fixtures/newAccount.json'

describe('Verify Create New Account', () => {
  it ('Create New Account for First Order', () => {
      cy.visit('');
      cy.contains('Create an Account').click();
      createAccount.createNewAccount(newAccount.registration.userValid.firstName, newAccount.registration.userValid.lastName, Date.now() + newAccount.registration.userValid.email, newAccount.registration.userValid.password)
       //write file .json data for this account
      cy.writeFile('cypress/fixtures/accountFirstOrder.json', {firstName: newAccount.registration.userValid.firstName,
        lastName: newAccount.registration.userValid.lastName, 
        email: Date.now() + newAccount.registration.userValid.email, 
        password: newAccount.registration.userValid.password})
      createAccount.message('Thank you for registering with Main Website Store.', 1000)
  })
})
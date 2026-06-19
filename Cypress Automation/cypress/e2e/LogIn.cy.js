describe('Login Function', () => {
  it('TCID_001 Valid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })
  it('TCID_002 Invalid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('have.text','Epic sadface: Username and password do not match any user in this service')
  })
  it('TCID_003 Invalid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('have.text','Epic sadface: Username and password do not match any user in this service')
  })
  it('TCID_004 Invalid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="password"]').type('secret')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('have.text','Epic sadface: Username is required')
  })
  it('TCID_005 Invalid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('have.text','Epic sadface: Password is required')
  })
  it('TCID_006 Invalid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard')
    cy.get('[data-test="password"]').type('secret')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('have.text','Epic sadface: Username and password do not match any user in this service')
  })

})
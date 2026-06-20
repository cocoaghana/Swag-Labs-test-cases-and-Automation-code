describe('Required Information Function', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/') 
        cy.setCookie('session-username', 'standard_user')
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }) 
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
    })
    it('TCID_022 Cancel', () => {
        cy.get('#cancel').click()
        cy.url().should('include', '/cart.html')
    })
    it('TCID_023 Enter Valid user information', () => {
        cy.get('#first-name').type('firstname')
        cy.get('#last-name').type('lastname')
        cy.get('#postal-code').type('000000')
        cy.get('#continue').click()
        cy.url().should('include', '/checkout-step-two.html')
    })
    it('TCID_024 Not enter firstname', () => {
        cy.get('#last-name').type('lastname')
        cy.get('#postal-code').type('000000')
        cy.get('#continue').click()
        cy.get('[data-test="error"]').should('have.text','Error: First Name is required')
    })
    it('TCID_025 Not enter lastname', () => {
        cy.get('#first-name').type('firstname')
        cy.get('#postal-code').type('000000')
        cy.get('#continue').click()
        cy.get('[data-test="error"]').should('have.text','Error: Last Name is required')
    })
    it('TCID_026 Not enter postal code', () => {
        cy.get('#first-name').type('firstname')
        cy.get('#last-name').type('lastname')
        cy.get('#continue').click()
        cy.get('[data-test="error"]').should('have.text','Error: Postal Code is required')
    })
})
    

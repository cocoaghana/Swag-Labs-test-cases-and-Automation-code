describe('Payment Function', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/') 
        cy.setCookie('session-username', 'standard_user')
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }) 
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('firstname')
        cy.get('#last-name').type('lastname')
        cy.get('#postal-code').type('000000')
        cy.get('#continue').click()
    })
    it('TCID_027 Cancel', () => {
        cy.get('#cancel').click()
        cy.url().should('include', '/inventory.html')
    })
    it('TCID_028 Finish', () => {
        cy.get('#finish').click()
        cy.url().should('include', '/checkout-complete.html')
    })
    it('TCID_029 Back home', () => {
        cy.get('#finish').click()
        cy.get('#back-to-products').click()
        cy.url().should('include', '/inventory.html')
    })
    
})
    

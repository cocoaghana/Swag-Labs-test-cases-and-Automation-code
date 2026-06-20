describe('Cart Function', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/') 
        cy.setCookie('session-username', 'standard_user')
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }) 
    })
    it('TCID_017 Add to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').should('exist')
        cy.get('.shopping_cart_badge').should('have.text','1')
    })
    it('TCID_018 Remove from cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('exist')
        cy.get('.shopping_cart_badge').should('not.exist')
    })
    it('TCID_019 Cart page', () => {
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
    })
    it('TCID_020 Continue Shopping', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('#continue-shopping').click()
        cy.url().should('include', '/inventory.html')
    })
    it('TCID_021 Check out', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.url().should('include', '/checkout-step-one.html')
    })
    
})
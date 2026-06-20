describe('Navigation Function', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/') 
        cy.setCookie('session-username', 'standard_user')
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }) 
    })
    it('TCID_010 All item', () => {
      cy.get('#react-burger-menu-btn').click()
      cy.get('#inventory_sidebar_link').click()
      cy.url().should('include', '/inventory.html') 
    })
    it('TCID_011 About', () => {
      cy.get('#react-burger-menu-btn').click()
      cy.get('#about_sidebar_link').should('have.attr', 'href', 'https://saucelabs.com/')
    })
    it('TCID_012 Logout', () => {
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
      cy.url().should('include', 'https://www.saucedemo.com')
    })
    
})
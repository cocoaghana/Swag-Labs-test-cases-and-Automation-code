describe('Contact Function', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/') 
        cy.setCookie('session-username', 'standard_user')
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }) 
    })
    it('TCID_007 X contact', () => {
      cy.get('[data-test="social-twitter"]').should('have.attr', 'href', 'https://twitter.com/saucelabs')
    })
    it('TCID_008 Facebook contact', () => {
      cy.get('[data-test="social-facebook"]').should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
    })
    it('TCID_009 LinkedIn contact', () => {
      cy.get('[data-test="social-linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
    })
})
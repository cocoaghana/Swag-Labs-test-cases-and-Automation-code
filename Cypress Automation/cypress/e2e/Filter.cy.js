describe('Filter Function', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/') 
        cy.setCookie('session-username', 'standard_user')
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }) 
    })
    it('TCID_013 Filter A-Z', () => {
      cy.get('[data-test="product-sort-container"]').select('az')
      let itemNamesFromWeb = []
      cy.get('.inventory_item_name').each(($el) => {
        itemNamesFromWeb.push($el.text()) 
    }).then(() => {
        let sortedNames = [...itemNamesFromWeb].sort()
        expect(itemNamesFromWeb).to.deep.equal(sortedNames)
        })
    })
    it('TCID_014 Filter Z-A', () => {
      cy.get('[data-test="product-sort-container"]').select('za')
      let itemNamesFromWeb = []
      cy.get('.inventory_item_name').each(($el) => {
        itemNamesFromWeb.push($el.text()) 
    }).then(() => {
        let sortedNames = [...itemNamesFromWeb].sort().reverse()
        expect(itemNamesFromWeb).to.deep.equal(sortedNames)
        })
    })
    it('TCID_015 Filter low to high', () => {
      cy.get('[data-test="product-sort-container"]').select('lohi')
      let itemPricesFromWeb = []
      cy.get('.inventory_item_price').each(($el) => {
        let price = parseFloat($el.text().replace('$', ''))
        itemPricesFromWeb.push(price)
    }).then(() => {
        let sortedPrices = [...itemPricesFromWeb].sort((a, b) => a - b)
        expect(itemPricesFromWeb).to.deep.equal(sortedPrices)
        })
    })
    it('TCID_016 Filter high to low', () => {
      cy.get('[data-test="product-sort-container"]').select('hilo')
      let itemPricesFromWeb = []
      cy.get('.inventory_item_price').each(($el) => {
        let price = parseFloat($el.text().replace('$', ''))
        itemPricesFromWeb.push(price)
    }).then(() => {
        let sortedPrices = [...itemPricesFromWeb].sort((a, b) => b- a)
        expect(itemPricesFromWeb).to.deep.equal(sortedPrices)
        })
    })
    
})
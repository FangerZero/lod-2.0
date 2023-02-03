describe('Miscelaneous Page', () => {
  it('Check Switching View functionality', () => {
    cy.visit('localhost:3000/game/miscelaneous')
    cy.getBySel('misc-btn').should('exist')
    cy.getBySel('promo-btn').should('exist')
    cy.getBySel('merch-btn').should('exist')
    cy.getBySel('misc-view').should('exist')
    cy.getBySel('promo-view').should('not.exist')
    cy.getBySel('merch-view').should('not.exist')
    // Click Promo Button
    cy.getBySel('promo-btn').click()
    cy.getBySel('misc-view').should('not.exist')
    cy.getBySel('promo-view').should('exist')
    cy.getBySel('merch-view').should('not.exist')
    // Click Merch Button
    cy.getBySel('merch-btn').click()
    cy.getBySel('misc-view').should('not.exist')
    cy.getBySel('promo-view').should('not.exist')
    cy.getBySel('merch-view').should('exist')
    // Click Misc Button
    cy.getBySel('misc-btn').click()
    cy.getBySel('misc-view').should('exist')
    cy.getBySel('promo-view').should('not.exist')
    cy.getBySel('merch-view').should('not.exist')
  })
})
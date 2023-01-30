describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000/game/miscelaneous')
    cy.get('[data-cy="misc-btn"]').should('exist')
    cy.get('[data-cy="promo-btn"]').should('exist')
    cy.get('[data-cy="merch-btn"]').should('exist')
    cy.get('[data-cy="misc-view"]').should('exist')
    cy.get('[data-cy="promo-view"]').should('not.exist')
    cy.get('[data-cy="merch-view"]').should('not.exist')
    // Click Promo Button
    cy.get('[data-cy="promo-btn"]').click()
    cy.get('[data-cy="misc-view"]').should('not.exist')
    cy.get('[data-cy="promo-view"]').should('exist')
    cy.get('[data-cy="merch-view"]').should('not.exist')
    // Click Merch Button
    cy.get('[data-cy="merch-btn"]').click()
    cy.get('[data-cy="misc-view"]').should('not.exist')
    cy.get('[data-cy="promo-view"]').should('not.exist')
    cy.get('[data-cy="merch-view"]').should('exist')
    // Click Misc Button
    cy.get('[data-cy="misc-btn"]').click()
    cy.get('[data-cy="misc-view"]').should('exist')
    cy.get('[data-cy="promo-view"]').should('not.exist')
    cy.get('[data-cy="merch-view"]').should('not.exist')
  })
})
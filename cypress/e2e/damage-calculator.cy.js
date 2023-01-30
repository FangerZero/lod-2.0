describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000/resources/damage-calculator')
    cy.get('[data-cy="level"]').should('exist')
    cy.get('[data-cy="attack"]').should('exist')
    cy.get('[data-cy="addition"]').should('exist')
    cy.get('[data-cy="enemy"]').should('exist')
    cy.get('[data-cy="base-dmg"]').should('exist').contains('Base Damage: ')
    cy.get('[data-cy="addition-dmg"]').should('exist').contains('Completed Addition Damage: ')

    cy.get('[data-cy="level"]').type(1)
    cy.get('[data-cy="attack"]').type(100)
    cy.get('[data-cy="addition"]').type(100)
    cy.get('[data-cy="enemy"]').select('Beastie Dragon')
    cy.get('[data-cy="base-dmg"]').should('exist').contains('Base Damage: 23')
    cy.get('[data-cy="addition-dmg"]').should('exist').contains('Completed Addition Damage: 23')

    cy.get('[data-cy="addition"]').clear().type(120)
    cy.get('[data-cy="base-dmg"]').should('exist').contains('Base Damage: 23')
    cy.get('[data-cy="addition-dmg"]').should('exist').contains('Completed Addition Damage: 28')

    cy.get('[data-cy="enemy"]').select('Air Combat')
    cy.get('[data-cy="base-dmg"]').should('exist').contains('Base Damage: 19')
    cy.get('[data-cy="addition-dmg"]').should('exist').contains('Completed Addition Damage: 23')
  })
})
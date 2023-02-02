describe('Damage Calculator', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/resources/damage-calculator')
  })

  it('On Screen And Validation', () => {
    cy.get('[data-cy="player"]').should('exist')
    cy.get('[data-cy="playerLevel"]').should('exist')
    cy.get('[data-cy="attackStat"]').should('exist')
    cy.get('[data-cy="addition"]').should('exist')
    cy.get('[data-cy="maxHitPercent"]').should('not.exist')
    cy.get('[data-cy="dragoonModifier"]').should('not.exist')
    cy.get('[data-cy="enemy"]').should('exist')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: ')
    
    //invalid Level Data
    cy.get('[data-cy="playerLevel"]').clear().type(100)
    cy.get('[data-cy="playerLevel"]').should('have.css', 'border-width', '8px')
    cy.get('[data-cy="playerLevel"]').clear().type(99)
    cy.get('[data-cy="playerLevel"]').should('have.css', 'border-width', '1px')
    //invalid Attack Data
    cy.get('[data-cy="attackStat"]').clear().type(1000)
    cy.get('[data-cy="attackStat"]').should('have.css', 'border-width', '8px')
    cy.get('[data-cy="attackStat"]').clear().type(75)
    cy.get('[data-cy="attackStat"]').should('have.css', 'border-width', '1px')
  })
/*
  it('Rose - Cactus - Astral Drain', () => {
    cy.get('[data-cy="player"]').select('Rose')
    cy.get('[data-cy="playerLevel"]').type(33)
    cy.get('[data-cy="attackStat"]').type(113)
    cy.get('[data-cy="addition"]').select('Astral Drain')
    cy.get('[data-cy="maxHitPercent"]').should('not.exist')
    cy.get('[data-cy="dragoonModifier"]').should('exist')
    cy.get('[data-cy="dragoonModifier"]').select(5)
    cy.get('[data-cy="enemy"]').select('Cactus')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 486')
    cy.get('[data-cy="field"]').select('Fire')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 486')
    cy.get('[data-cy="field"]').select('Dark')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 729')
  })

  it('Lavitz - Rod Typhoon', () => {
    cy.get('[data-cy="player"]').select('Lavitz')
    cy.get('[data-cy="playerLevel"]').type(12)
    cy.get('[data-cy="attackStat"]').type(60)
    cy.get('[data-cy="addition"]').select('Rod Typhoon')
    cy.get('[data-cy="dragoonModifier"]').should('not.exist')
    cy.get('[data-cy="maxHitPercent"]').should('exist')
    cy.get('[data-cy="maxHitPercent"]').select(4)
    cy.get('[data-cy="enemy"]').select('Plague Rat')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 157')
    cy.get('[data-cy="enemy"]').select('Helena Warden')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 94')
    cy.get('[data-cy="enemy"]').select('Senior Warden')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 73')
  })
  */
})
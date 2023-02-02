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

  it('Rose - Astral Drain - Cactus', () => {
    cy.get('[data-cy="player"]').select('Rose')
    cy.get('[data-cy="playerLevel"]').type(33)
    cy.get('[data-cy="attackStat"]').type(113)
    cy.get('[data-cy="addition"]').select('Astral Drain')
    cy.get('[data-cy="maxHitPercent"]').should('not.exist')
    cy.get('[data-cy="dragoonModifier"]').should('exist')
    cy.get('[data-cy="dragoonModifier"]').select(5)
    cy.get('[data-cy="enemy"]').select('Cactus')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 486') // 486
    cy.get('[data-cy="field"]').select('Fire')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 486') // 486
    cy.get('[data-cy="field"]').select('Dark')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 729') // 728
  })
  
  it('Rose - Whip Smack', () => {
    cy.get('[data-cy="player"]').select('Rose')
    cy.get('[data-cy="playerLevel"]').type(12)
    cy.get('[data-cy="attackStat"]').type(67)
    cy.get('[data-cy="addition"]').select('Whip Smack')
    cy.get('[data-cy="dragoonModifier"]').should('not.exist')
    cy.get('[data-cy="maxHitPercent"]').should('exist')
    cy.get('[data-cy="maxHitPercent"]').select(2)
    cy.get('[data-cy="enemy"]').select('Hellena Warden')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 71') // 71
    cy.get('[data-cy="enemy"]').select('Senior Warden')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 54') // 54
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
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 157') // 157
    cy.get('[data-cy="enemy"]').select('Hellena Warden')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 94') // 94
    cy.get('[data-cy="enemy"]').select('Senior Warden')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 73') // 73
  })

  it('Meru - Freezing Ring - Cactus', () => {
    cy.get('[data-cy="player"]').select('Meru')
    cy.get('[data-cy="playerLevel"]').type(32)
    cy.get('[data-cy="attackStat"]').type(143)
    cy.get('[data-cy="addition"]').select('Freezing Ring')
    cy.get('[data-cy="maxHitPercent"]').should('not.exist')
    cy.get('[data-cy="dragoonModifier"]').should('exist')
    cy.get('[data-cy="dragoonModifier"]').select(5)
    cy.get('[data-cy="enemy"]').select('Cactus')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 599') // 598
    cy.get('[data-cy="field"]').select('Fire')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 299') // 298
    cy.get('[data-cy="field"]').select('Dark')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 599') // 598
    cy.get('[data-cy="field"]').select('Water')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 898')
  })

  it('Dart Feld - Flameshot - Cactus', () => {
    cy.get('[data-cy="player"]').select('Dart Feld')
    cy.get('[data-cy="playerLevel"]').type(32)
    cy.get('[data-cy="attackStat"]').type(113)
    cy.get('[data-cy="addition"]').select('Flameshot')
    cy.get('[data-cy="maxHitPercent"]').should('not.exist')
    cy.get('[data-cy="dragoonModifier"]').should('exist')
    cy.get('[data-cy="dragoonModifier"]').select(5)
    cy.get('[data-cy="enemy"]').select('Cactus')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 472') // 472
    cy.get('[data-cy="field"]').select('Fire')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 708') // 708
    cy.get('[data-cy="field"]').select('Dark')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 472') // 472
    cy.get('[data-cy="field"]').select('Water')
    cy.get('[data-cy="damage"]').should('exist').contains('Damage: 236')
  })
  
})
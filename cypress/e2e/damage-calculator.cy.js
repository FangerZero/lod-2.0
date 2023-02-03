describe('Damage Calculator', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/resources/damage-calculator')
  })

  it('On Screen And Validation', () => {
    cy.getBySel('player').should('exist')
    cy.getBySel('playerLevel').should('exist')
    cy.getBySel('attackStat').should('exist')
    cy.getBySel('addition').should('exist')
    cy.getBySel('maxHitPercent').should('not.exist')
    cy.getBySel('dragoonModifier').should('not.exist')
    cy.getBySel('enemy').should('exist')
    cy.getBySel('damage').should('exist').contains('Damage: ')
    
    //invalid Level Data
    cy.getBySel('playerLevel').clear().type(100)
    cy.getBySel('playerLevel').should('have.css', 'border-width', '8px')
    cy.getBySel('playerLevel').clear().type(99)
    cy.getBySel('playerLevel').should('have.css', 'border-width', '1px')
    //invalid Attack Data
    cy.getBySel('attackStat').clear().type(1000)
    cy.getBySel('attackStat').should('have.css', 'border-width', '8px')
    cy.getBySel('attackStat').clear().type(75)
    cy.getBySel('attackStat').should('have.css', 'border-width', '1px')
  })

  it('Rose - Astral Drain - Cactus', () => {
    cy.getBySel('player').select('Rose')
    cy.getBySel('playerLevel').type(33)
    cy.getBySel('attackStat').type(113)
    cy.getBySel('addition').select('Astral Drain')
    cy.getBySel('maxHitPercent').should('not.exist')
    cy.getBySel('dragoonModifier').should('exist')
    cy.getBySel('dragoonModifier').select(5)
    cy.getBySel('enemy').select('Cactus')
    cy.getBySel('damage').should('exist').contains('Damage: 486') // 486
    cy.getBySel('field').select('Fire')
    cy.getBySel('damage').should('exist').contains('Damage: 486') // 486
    cy.getBySel('field').select('Dark')
    cy.getBySel('damage').should('exist').contains('Damage: 729') // 728
  })
  
  it('Rose - Whip Smack', () => {
    cy.getBySel('player').select('Rose')
    cy.getBySel('playerLevel').type(12)
    cy.getBySel('attackStat').type(67)
    cy.getBySel('addition').select('Whip Smack')
    cy.getBySel('dragoonModifier').should('not.exist')
    cy.getBySel('maxHitPercent').should('exist')
    cy.getBySel('maxHitPercent').select(2)
    cy.getBySel('enemy').select('Hellena Warden')
    cy.getBySel('damage').should('exist').contains('Damage: 71') // 71
    cy.getBySel('enemy').select('Senior Warden')
    cy.getBySel('damage').should('exist').contains('Damage: 54') // 54
  })

  it('Lavitz - Rod Typhoon', () => {
    cy.getBySel('player').select('Lavitz')
    cy.getBySel('playerLevel').type(12)
    cy.getBySel('attackStat').type(60)
    cy.getBySel('addition').select('Rod Typhoon')
    cy.getBySel('dragoonModifier').should('not.exist')
    cy.getBySel('maxHitPercent').should('exist')
    cy.getBySel('maxHitPercent').select(4)
    cy.getBySel('enemy').select('Plague Rat')
    cy.getBySel('damage').should('exist').contains('Damage: 157') // 157
    cy.getBySel('enemy').select('Hellena Warden')
    cy.getBySel('damage').should('exist').contains('Damage: 94') // 94
    cy.getBySel('enemy').select('Senior Warden')
    cy.getBySel('damage').should('exist').contains('Damage: 73') // 73
  })

  it('Meru - Freezing Ring - Cactus', () => {
    cy.getBySel('player').select('Meru')
    cy.getBySel('playerLevel').type(32)
    cy.getBySel('attackStat').type(143)
    cy.getBySel('addition').select('Freezing Ring')
    cy.getBySel('maxHitPercent').should('not.exist')
    cy.getBySel('dragoonModifier').should('exist')
    cy.getBySel('dragoonModifier').select(5)
    cy.getBySel('enemy').select('Cactus')
    cy.getBySel('damage').should('exist').contains('Damage: 599') // 598
    cy.getBySel('field').select('Fire')
    cy.getBySel('damage').should('exist').contains('Damage: 299') // 298
    cy.getBySel('field').select('Dark')
    cy.getBySel('damage').should('exist').contains('Damage: 599') // 598
    cy.getBySel('field').select('Water')
    cy.getBySel('damage').should('exist').contains('Damage: 898')
  })

  it('Dart Feld - Flameshot - Cactus', () => {
    cy.getBySel('player').select('Dart Feld')
    cy.getBySel('playerLevel').type(32)
    cy.getBySel('attackStat').type(113)
    cy.getBySel('addition').select('Flameshot')
    cy.getBySel('maxHitPercent').should('not.exist')
    cy.getBySel('dragoonModifier').should('exist')
    cy.getBySel('dragoonModifier').select(5)
    cy.getBySel('enemy').select('Cactus')
    cy.getBySel('damage').should('exist').contains('Damage: 474') // 472
    cy.getBySel('field').select('Fire')
    cy.getBySel('damage').should('exist').contains('Damage: 711') // 708
    cy.getBySel('field').select('Dark')
    cy.getBySel('damage').should('exist').contains('Damage: 472') // 472
    cy.getBySel('field').select('Water')
    cy.getBySel('damage').should('exist').contains('Damage: 236')
  })
  
})
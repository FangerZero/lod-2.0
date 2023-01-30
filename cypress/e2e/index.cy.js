
describe('Landing Page', () => {
    /*before(() => {
        cy.visit('localhost:3000/')
    })*/
    it('Theme Component: Changing themes', () => {
         cy.visit('localhost:3000/')
        // Check Body BG Color
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[data-cy="theme"]').should('exist')
        // Spirits should be hidden until clicked
        cy.get('[data-cy="spirits"]').should('not.be.visible')
        cy.get('[data-cy="current"]').click()
        cy.get('[data-cy="spirits"]').should('be.visible')

        //          Red-Eye Theme
        // Make sure Red Exists before clicking, then Hide Spirits
        cy.get('[data-cy="red"]').should('exist')
        cy.get('[data-cy="red"]').click()
        cy.get('[data-cy="spirits"]').should('not.be.visible')
        // Make sure BG and "current" img changed to "red"
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 54, 0)')
        cy.get('[data-cy="current"]').should('have.attr', 'src', '/images/bullets/DS_Red-Eye.webp')

        //          Darkness Theme
        // Spirits should be hidden until clicked
        cy.get('[data-cy="current"]').click()
        cy.get('[data-cy="spirits"]').should('be.visible')
        // Make sure darkness Exists before clicking, then Hide Spirits
        cy.get('[data-cy="darkness"]').should('exist')
        cy.get('[data-cy="darkness"]').click()
        cy.get('[data-cy="spirits"]').should('not.be.visible')
        // Make sure BG and "current" img changed to "darkness"
        cy.get('body').should('have.css', 'background-color', 'rgb(42, 40, 90)')
        cy.get('[data-cy="current"]').should('have.attr', 'src', '/images/bullets/DS_Darkness.webp')
    })

    it('Utilizing the Navigational Bar', () => {
        cy.visit('localhost:3000/')
        cy.get('[data-cy="current"]').should('have.attr', 'src', '/images/bullets/default.webp')
        // Go to Home Page
        cy.get('a[data-cy="nav-home"]').should('be.visible').should('have.length', 1).click()
        cy.url().should('eq', 'http://localhost:3000/') 
        // Go to News Page
        cy.get('a[data-cy="nav-news"]').should('be.visible').should('have.length', 1).click()
        cy.url().should('eq', 'http://localhost:3000/news') 
        // Go to Map Page Will need to manually invoke show, Cypress does not do "hover"
        
        cy.get('[data-cy="nav-game-dd"]').invoke('show')
        cy.get('a[data-cy="nav-map"]').should('be.visible').should('have.length', 1).click()
        cy.url().should('eq', 'http://localhost:3000/game/map') 
        
    })
  })
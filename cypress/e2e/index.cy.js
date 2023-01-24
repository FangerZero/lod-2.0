
describe('Landing Page', () => {
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
  })
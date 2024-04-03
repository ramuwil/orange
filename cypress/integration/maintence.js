describe('Maintenance test cases', () => {
    it('Access to maintenance mode', () => {
        cy.visit(Cypress.env('url'));

        cy.fixture('data').then( (data) => {
            cy.login(data.username, data.password);
        } )

        cy.get('h6.oxd-text').should('have.text', 'Dashboard');

        
        cy.get('a[href*="maintenance"]').as('maintenance');
        cy.get('@maintenance').click();

        
        cy.fixture('data').then( (data) => {
            cy.typeInField('Password', data.password);
        })

        
        cy.get('button[type="submit"]').click();

        cy.get('h6.oxd-text.oxd-topbar-header-breadcrumb-module').should('have.text', 'Maintenance');
    })

    it('Access to maintenance mode with incorrect credentials', () => {
        cy.visit(Cypress.env('url'));

        cy.fixture('data').then( (data) => {
            cy.login(data.username, data.password);
        } )

        cy.get('h6.oxd-text').should('have.text', 'Dashboard');

       
        cy.get('a[href*="maintenance"]').as('maintenance');
        cy.get('@maintenance').click();

        cy.fixture('data').then( (data) => {
            cy.typeInField('Password', data.incorrectPassword);
        })

       
        cy.get('button[type="submit"]').click();

        cy.get('div[class*=error] > p').should('have.text', 'Invalid credentials');
    })
})
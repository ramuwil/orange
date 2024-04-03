/// <reference types="cypress" />
describe('Verify login functional', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url1st'));
    });
    it('verify login valid data', () => {
        cy.fixture('data').then( (data) => {
        cy.masuk(data.email, data.password1);
        })
            cy.get('.avatar > img').should('be.visible')
    });
    it('verify login invalid data', () => {
        cy.fixture('data').then( (data) => {
        cy.masuk(data.incorrectEmail, data.incorrectPassword1);
        })
            cy.get('#modal-alert').should('be.visible')  
    });
    it('verify login valid email and invalid password', () => {
        cy.fixture('data').then( (data) => {
        cy.masuk(data.email, data.incorrectPassword1);
            })
            cy.get('#modal-alert').should('be.visible')
    });
    it('verify login invalid email and valid password', () => {
        cy.fixture('data').then( (data) => {
        cy.masuk(data.incorrectEmail, data.password1);
            })
            cy.get('#modal-alert').should('be.visible')
    });
});
describe('Verify Forgot Password functional', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url2nd'));
    });
    it('verify forgot password email already register', () => {
        cy.fixture('data').then( (data) => {
            cy.forgot(data.email);
                })
                cy.get('strong').should('have.text','Password reminder sent! !')
    });
    it('verify forgot password email not registered', () => {
        cy.fixture('data').then( (data) => {
            cy.forgot(data.incorrectEmail);
        })
        cy.get('strong').should("have.text","We can't find a user with that e-mail address. !")
    });
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[class*="login"]').click();
} )
Cypress.Commands.add('typeInField', (field, value) => {
    cy.get('label').contains(field).parent().parent().find('div').eq(1).type(value);
})
Cypress.Commands.add('masuk',(email,password1) =>{
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password1);
    cy.get('#login > .btn').click()  
})
Cypress.Commands.add('forgot',(email)=>{
    cy.get('input[name="email"]').type(email);
    cy.get(':nth-child(3) > .btn').click()
})
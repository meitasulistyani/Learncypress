/// <reference types="cypress"/>

describe('working with fixture',() => {
    it('visit the website',() => {
        cy.visit('http://uitestingplayground.com/sampleapp')
        cy.url().should('include','sampleapp')
        cy.fixture("user").then(user => {
            const uname = user.username //john
            const passwd = user.password //pwd
        cy.get('input[name="UserName"]').clear()
        cy.get('input[name="UserName"]').type('uname')
        cy.get('input[name="Password"]').clear()
        cy.get('input[name="Password"]').type('passwd')
        cy.get('#login').click()

    });
});
});
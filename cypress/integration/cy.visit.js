/// <reference types = "cypress"/>

it.only('Acessando url', () => {
    cy.visit("?id_category=8&controller=category")
})
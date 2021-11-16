/// <reference types = "cypress"/>

it.only('contains', () => {
    cy.visit("?id_category=8&controller=category")
            .get('.layered_filter')
            .contains('Orange')
            
})
/// <reference types = "cypress"/>

const { find } = require("lodash")

it.only('contains', () => {
    cy.visit("?id_category=8&controller=category")
            .get('#ul_layered_id_attribute_group_1')
                .find('li').contains('Orange', {timeout: 7000}) //
})
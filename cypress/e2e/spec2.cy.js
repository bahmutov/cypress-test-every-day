// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import testFruits from '../../test-fruits.json'

it('shows one of the fruits', () => {
  cy.visit('public/index.html')
  cy.get('#fruit li').should('have.length', testFruits.length)

  const now = new Date()
  const fullDaysSinceEpoch = Math.floor(now / 8.64e7)
  const testFruitIndex = fullDaysSinceEpoch % testFruits.length
  const testFruit = testFruits[testFruitIndex]
  cy.log(
    `picked test fruit ${fullDaysSinceEpoch} ${testFruitIndex}: ${testFruit}`,
  )
  cy.contains('#fruit li', testFruit)
})

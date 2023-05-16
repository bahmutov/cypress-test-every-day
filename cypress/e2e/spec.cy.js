// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('shows one of the fruits', () => {
  cy.visit('public/index.html')
  cy.readFile('test-fruits.json')
    .its('length')
    .then((n) => {
      cy.get('#fruit li').should('have.length', n)
    })

  cy.readFile('test-fruits.json').then((list) => {
    const now = new Date()
    const fullDaysSinceEpoch = Math.floor(now / 8.64e7)
    const testFruitIndex = fullDaysSinceEpoch % list.length
    const testFruit = list[testFruitIndex]
    cy.log(
      `picked test fruit ${fullDaysSinceEpoch} ${testFruitIndex}: ${testFruit}`,
    )
    cy.contains('#fruit li', testFruit)
  })
})

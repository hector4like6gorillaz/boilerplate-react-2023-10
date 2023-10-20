/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Presiona tres veces el boton del contador esperando 3 segundos entre presionada', () => {
    cy.wait(3000)
    cy.get('.Cypress-button').click()
    cy.wait(3000)
    cy.get('.Cypress-button').click()
    cy.wait(3000)
    cy.get('.Cypress-button').click()
  })
})

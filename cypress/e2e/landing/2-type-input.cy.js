/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Presiona tres veces el boton del contador esperando 3 segundos entre presionada', () => {
    const inputSearch = cy.get('.cypress-input')
    const searchButton = cy.get('.cypress-search-button')
    cy.wait(2000)
    inputSearch.type('pikachu', { delay: 150 })
    cy.wait(1000)
    searchButton.click()
    inputSearch.clear()
    //mismo proceso
    inputSearch.type('muk', { delay: 150 })
    cy.wait(1000)
    searchButton.click()
    inputSearch.clear()
    //mismo proceso
    inputSearch.type('eevee', { delay: 150 })
    cy.wait(1000)
    searchButton.click()
  })
})

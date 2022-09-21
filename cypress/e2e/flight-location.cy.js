describe('Flight location selection page', () => {

  beforeEach(() => {
    cy.visit('https://www.flybreeze.com/home')
  })

  it('The user should see a Roundtrip tab that is active', () => {
    cy.get('.tc-roundtrip-btn').should('have.class', 'active')
  })

  it('When the user has the Roundtrip tab selected, they should see the options for a depart date and return date', () => {
    cy.get('.tc-roundtrip-btn').click()
    cy.get('.tc-flight-date-picker').children('.date').should('have.length', 2)
  })

  it('The user should not be able to select guests until flight locations are selected', () => {
    cy.get('.passengers').click()
    cy.get('.message').should('be.visible')

    cy.get('#origin').click().type('Las Vegas', '{enter}')
    cy.get('#destination').click().type('Fort Myers', '{enter}')

    cy.get('.tc-flight-date-picker').click()
    cy.get('.mbsc-cal-day-picker').should('be.visible')
  })

  it('The user should not be able to select flight dates until flight locations are selected', () => {
    cy.get('.tc-flight-date-picker').click()
    cy.get('.message').should('be.visible')

    cy.get('#origin').click().type('Las Vegas', '{enter}')
    cy.get('#destination').click().type('Fort Myers', '{enter}')

    cy.get('.tc-flight-date-picker').click()
    cy.get('.mbsc-cal-day-picker').should('be.visible')
  })

  it('When the user types a origin location, the list of locations should be filtered until one is selected', () => {
    cy.get('#origin').click()
    cy.get('.ng-option').siblings().should('have.length', 31)
    cy.get('#origin').click().type('L')
    cy.get('.ng-option').siblings().should('have.length', 3)
    cy.get('#origin').click().type('a')
    cy.get('.ng-option').siblings().should('have.length', 1)
  })

  it('When the user types a destination location, the list of locations should be filtered until one is selected', () => {
    cy.get('#destination').click()
    cy.get('.ng-option').siblings().should('have.length', 31)
    cy.get('#destination').click().type('L')
    cy.get('.ng-option').siblings().should('have.length', 3)
    cy.get('#destination').click().type('a')
    cy.get('.ng-option').siblings().should('have.length', 1)
  })

  it('When the user types a location that does not exist, they should see a message indicating the location was not found', () => {
    cy.get('#origin').click().type('Planet of the Apes')
    cy.get('.mt-2').contains('No Stations Found')
  })

  it('The user should not be able to click the advance button until they have selected flight locations', () => {
    cy.get('#search-flights').should('be.disabled')
    cy.get('#origin').click().type('Las Vegas', '{enter}')
    cy.get('#destination').click().type('Fort Myers', '{enter}')
    cy.get('#search-flights').should('not.be.disabled')
  })

  it('The user should be taken to a flight package page when they click the search flights button', () => {
    cy.get('#origin').click().type('Las Vegas', '{enter}')
    cy.get('#destination').click().type('Fort Myers', '{enter}')
    cy.get('#search-flights').click().url().should('eq', 'https://www.flybreeze.com/booking/availability?origin=LAS&destination=RSW')  // This would most likely be stubbed
  })
})

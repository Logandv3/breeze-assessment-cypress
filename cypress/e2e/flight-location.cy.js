describe('Flight location selection page', () => {

  beforeEach(() => {
    cy.visit('https://www.flybreeze.com/home')
  })

  // it('The user should see a Roundtrip tab that is active', () => {
  //   cy.get('.tc-roundtrip-btn').should('have.class', 'active')
  // })

  // it('When the user has the Roundtrip tab selected, they should see the options for a depart date and return date', () => {
  //   cy.get('.tc-roundtrip-btn').click()
  //   cy.get('.tc-flight-date-picker').children('.date').should('have.length', 2)
  // })

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
})

  it('When the user types a location, the list of locations should be filtered until one is selected', () => {
    cy.get('#origin').click().type('Las Vegas', '{enter}')
  })
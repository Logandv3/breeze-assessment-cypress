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
})
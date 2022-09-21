describe('Flight location selection page', () => {

  beforeEach(() => {
    cy.visit('https://www.flybreeze.com/home')
  })
  it('The user should see a Roundtrip tab', () => {
    cy.get('.nav-link tc-roundtrip-btn active')
  })
})
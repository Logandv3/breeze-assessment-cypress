describe('Flight package selection page', () => {

  beforeEach(() => {
    cy.visit('https://www.flybreeze.com/booking/availability?origin=LAS&destination=RSW&beginDate=2022-10-05&endDate=2022-10-05&searchDestinationMacs=false&searchOriginMacs=false&passengers=%7B%22types%22:%5B%7B%22count%22:1,%22type%22:%22ADT%22%7D%5D%7D&infantCount=0&experimental=true')
  })

  it('The user should be able to select a date from the carousel', () => {
    cy.get()
  })
})
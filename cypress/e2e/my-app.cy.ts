describe('myApp', () => {
  it('should visit homepage', () => {
    cy.visit('http://localhost:3000/')

    cy.percySnapshot('Homepage test');
  })
})
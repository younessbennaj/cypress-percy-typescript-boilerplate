describe('myApp', () => {
  it('should display homepage header', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Learn React')
  })
})
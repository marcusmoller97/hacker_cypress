describe('template spec', () => {
  it('check that we are on site and h1 exist', () => {
    cy.visit('https://jorlindstrom.github.io/HACKER-ESCAPEROOM/')
    cy.get('h1').should('contains.text', 'Hacker Escape Rooms')
  })
})

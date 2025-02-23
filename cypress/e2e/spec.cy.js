describe('template spec', () => {

  const URL = 'https://jorlindstrom.github.io/HACKER-ESCAPEROOM/';

  it('check that we are on site and h1 exist', () => {
    cy.visit(URL);
    cy.request('https://jorlindstrom.github.io/HACKER-ESCAPEROOM/')
      .its('status')
      .should('eq', 200);
    cy.get('h1').should('contains.text', 'Hacker Escape Rooms');
  });

  it('Check that filter works', () => {
    cy.visit(URL + 'challenges.html')
      .wait(1000);
    cy.get(':nth-child(2) > .main-nav__item-link')
      .click().wait(1000);
    cy.get('.filterBtn').click();
    cy.get('[for="javascript"]').click();
    cy.get('[for="electronics"]').click();
    cy.get('h3').should('contains.text', 'Challenge in the machine');
  });

  it('Check that the site can be navigated', () => {
    cy.visit(URL);
    cy.get(':nth-child(3) > .main-nav__item-link').click();
    cy.get('.logotype__image').click();
    cy.get('.article__link > #load-challenges').click();
  });

  it('Should give No matching challenges when filtering not found, otherwise should get result', () => {
    cy.visit(URL + 'challenges.html')
      .wait(1000);
    cy.get(':nth-child(2) > .main-nav__item-link')
      .click().wait(1000);
    cy.get('.filterBtn').click();
    cy.get('.filterSearch_input').type('Example');
    cy.get('h2').should('contains.text', 'No matching challenges');
    cy.get('#resetFilters > .fa-solid').click()
    cy.get('.filterSearch_input').type('Mystery on Windows');
    cy.get('.card__title').should('contains.text', 'Mystery on Windows');
  });
});

describe('Routing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');

    cy.get('#header');
  });

  it('should change the page title in HTML head', () => {
    cy.title().should('eq', 'Home - CampSpots');

    cy.visit('http://localhost:1234/about');

    // test for title change
    cy.title().should('contain', 'About');
  });

  it('should change the page via keyboard', () => {

    // open meganav
    cy.get('[data-testid="megamenu-section1"]').focus().click();

    // tab into nav
    cy.realPress('Tab');

    // click first nav item for /listings page
    cy.focused().click();

    // check title change
    cy.title().should('contain', 'Listings');
  });
});

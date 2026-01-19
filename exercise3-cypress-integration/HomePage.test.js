describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
    cy.injectAxe();
  });

  it('should have a Header', () => {
    cy.get('#header').contains('CampSpots');
  });

  it('should have an aria-current home link', () => {
    cy.get('#header-logo a').should('have.attr', 'aria-current', 'page');
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y({
      exclude: ['div#portal-root'],
    });
  });
});

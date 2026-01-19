describe('Passes Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/passes');

    cy.injectAxe();
  });

  it('should have an accessible payment dialog', () => {
    // Open the Basic Plan dialog
    cy.get('[data-testid="btn-open-basic-dialog"]').focus().click();

    // focus is sent into dialog
    cy.focused().should('have.attr', 'role', 'dialog');

    // Tab should move focus to close button that also has aria-label that includes the word "close"
    cy.realPress(['Tab']);
    cy.focused()
      .should('have.attr', 'data-testid', 'btn-close-dialog')
      .and('have.attr', 'aria-label')
      .and('include', 'Close');

    // Escape returns focus to triggering button
    cy.realPress(['Escape']);
    cy.focused().should('have.attr', 'data-testid', 'btn-open-basic-dialog');
  });

  it('should have no accessibility violations on load', () => {
    cy.checkA11y({
      exclude: ['div#portal-root'],
    });
  });
});

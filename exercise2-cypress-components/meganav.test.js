import * as React from 'react';
import { mount } from '@cypress/react';

import MegaNav from 'components/meganav';

describe('MegaNav', () => {
  beforeEach(() => {
    mount(<MegaNav />);

    cy.injectAxe();
  });
  xit('should operate with the keyboard via toggle buttons', () => {
    cy.get('[data-testid="megamenu-section1"]').focus().click();

    cy.focused().should('have.attr', 'aria-expanded', 'true');
  });
  xit('sub menu links should not be focusable when meganav is not expanded', () => {
    cy.get('[data-testid="megamenu-section1"]').focus().realPress('Tab');
    cy.focused().should('not.have.attr', '[data-testid="link-0"]');
    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'megamenu-section2');
    });
  });
  xit('sub menu links should be focusable when meganav is expanded', () => {
    cy.get('[data-testid="megamenu-section2"]').focus().click();

    cy.focused().realPress('Tab');

    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'link-0');
    });
  });
  it('should have no accessibility issues when open', () => {
    cy.get('button[data-testid="megamenu-section1"]').click();

    cy.checkA11y(null, {
      runOnly: {
        type: 'rule',
        values: ['color-contrast'],
      },
    });
  });
});

import React from 'react';
import { mount } from '@cypress/react';

import IconButton from 'components/icon-button';

describe('IconButton', () => {
  beforeEach(() => {
    mount(<IconButton name='credit-card' />);
  });
  it('is a button element or has a button role', () => {
    cy.get('button').should('exist');
  });
  it('labels the button', () => {
    cy.get('button').should('have.attr', 'aria-label', 'credit-card');
  });
  it('can be focusedby the keyboard', () => {
    cy.get('button').focus().should('have.focus');
  });
  it('can be operated by keyboard', () => {
    // 1. Create the spy
    const onClickSpy = cy.spy().as('handleClick');

    // 2. Pass the spy as a prop
    mount(<IconButton name='credit-card' onClick={onClickSpy} />);

    // 3. Trigger the action
    cy.get('button').click();

    // 4. Assert the spy was called
    cy.get('@handleClick').should('have.been.called');
  });
});

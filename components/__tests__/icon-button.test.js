/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, getByText, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import IconButton from '../icon-button';

const user = userEvent.setup();

describe('IconButton', () => {
  it('is a button element or has a button role', () => {
    const { getByRole } = render(<IconButton name='wifi' onClick={() => {}} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
  it('labels the button', () => {
    const nameFixture = 'wifi';
    const { getByLabelText } = render(<IconButton name={nameFixture} onClick={() => {}} />);

    const iconText = getByLabelText(nameFixture);

    expect(iconText).toBeInTheDocument();
  });
  it('can be focused by the keyboard', async () => {
    render(<IconButton name='Send it' onClick={() => {}} />);

    const button = screen.getByRole('button');

    await user.tab();
    expect(button).toHaveFocus();
  });
  it('can be operated by keyboard', async () => {
    let clicked = false;

    render(
      <IconButton
        name='Send it'
        onClick={() => {
          clicked = true;
        }}
      />
    );

    const button = screen.getByRole('button');

    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard('{Enter}');

    expect(clicked).toBe(true);
  });
  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<IconButton name='Submit' onClick={handleClick} />);

    const button = screen.getByTestId('btn-submit');

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

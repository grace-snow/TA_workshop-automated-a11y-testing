/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import PresetsCustomAmounts from '../presets-custom-amounts';

const user = userEvent.setup();

describe('Preset amount radio buttons', () => {
  it('acts as one tab stop', async () => {
    render(
      <form>
        <PresetsCustomAmounts amounts={[10, 25, 50]} />
        <button>Text</button>
      </form>
    );

    // your test code here
    const firstRadio = screen.getByDisplayValue(10);
    const button = screen.getByRole('button');

    await user.tab();
    expect(firstRadio).toHaveFocus();

    await user.tab();
    expect(button).toHaveFocus();
  });
  // Removed this test because arrow key navigation between radio buttons is
  // handled by the browser natively and cannot be reliably tested in JSDOM via user-event yet.
  // it('arrow keys change radio selection', async () => {
  //   render(
  //     <form>
  //       <PresetsCustomAmounts amounts={[10, 25, 50]} />
  //       <button>Text</button>
  //     </form>
  //   );

  //   // your test code here
  //   const firstRadio = screen.getByDisplayValue(10);
  //   const secondRadio = screen.getByDisplayValue(25);
  //   const thirdRadio = screen.getByDisplayValue(50);

  //   firstRadio.click();
  //   expect(firstRadio).toBeChecked();

  //   await user.keyboard('{ArrowDown}');
  //   expect(secondRadio).toBeChecked();

  //   await user.keyboard('{ArrowDown}');
  //   expect(thirdRadio).toBeChecked();

  //   await user.keyboard('{ArrowUp}');
  //   expect(secondRadio).toBeChecked();
  // });
  it('enables a custom field amount', async () => {
    render(
      <form>
        <PresetsCustomAmounts amounts={[10, 25, 50]} />
        <button>Text</button>
      </form>
    );

    // your test code here
    const firstRadio = screen.getByDisplayValue(10);
    const customRadio = screen.getByTestId('amt_custom');
    const customInputText = screen.getByTestId('amt_custom_text');

    await user.tab();
    expect(firstRadio).toHaveFocus();

    customRadio.click();
    expect(customRadio).toBeChecked();

    await user.tab();
    expect(customInputText).toHaveFocus();
  });
});

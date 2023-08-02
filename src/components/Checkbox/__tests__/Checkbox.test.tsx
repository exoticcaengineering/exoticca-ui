import { Props } from '../Checkbox.types';
import userEvent from '@testing-library/user-event';
import * as stories from '../__stories__/Checkbox.stories';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

const { Base } = composeStories(stories);

const mockProps: Props = {
  label: 'checkbox label',
  name: 'checkbox-name',
};

describe('Checkbox', () => {
  it('should be unchecked by default', () => {
    const { container } = render(<Base {...mockProps} />);
    const inputEl = container.querySelector(
      `input[name="checkbox-name"]`,
    ) as HTMLInputElement;

    expect(inputEl.checked).toEqual(false);
  });
  // when the checkbox is checked, the input should be checked
  it('should be checked when clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<Base />);
    const checkbox = screen.getByText(/checkbox label/i);
    await user.click(checkbox);
    const inputEl = container.querySelector(
      `input[name="checkbox-name"]`,
    ) as HTMLInputElement;
    expect(inputEl.checked).toEqual(true);
  });

  // unchecked when clicked twice
  it('tests checkbox can be unchecked', async () => {
    const user = userEvent.setup();
    const { container } = render(<Base />);
    const checkbox = screen.getByText(/checkbox label/i);
    await user.click(checkbox);
    await user.click(checkbox);
    const inputEl = container.querySelector(
      `input[name="checkbox-name"]`,
    ) as HTMLInputElement;
    expect(inputEl.checked).toEqual(false);
  });
});

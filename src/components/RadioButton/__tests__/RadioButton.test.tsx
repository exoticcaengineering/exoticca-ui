import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/RadioButton.stories';
import userEvent from '@testing-library/user-event';

const { Base, Checked, WithStartIcon, WithEndIcon, Disabled, Group } =
  composeStories(stories);

describe('RadioButton', () => {
  it('renders base RadioButton correctly', () => {
    render(<Base />);
    const radioButton = screen.getByLabelText('Radio Button');
    expect(radioButton).toBeInTheDocument();
  });
  it('renders checked RadioButton correctly', async () => {
    render(<Checked />);
    const radioButton = screen.getByLabelText('Radio Button');
    expect(radioButton).toBeChecked();
  });
  it('renders RadioButton with start icon correctly', () => {
    render(<WithStartIcon />);
    const icon = screen.getByTestId('envelope-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders RadioButton with end icon correctly', () => {
    render(<WithEndIcon />);
    const icon = screen.getByTestId('envelope-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders disabled RadioButton correctly', () => {
    render(<Disabled />);
    const radioButton = screen.getByLabelText('Radio Button');
    expect(radioButton).toBeDisabled();
  });

  it('renders RadioButton group correctly', async () => {
    render(<Group />);
    const radioButton1 = screen.getByLabelText('Radio Button 1');
    const radioButton2 = screen.getByLabelText('Radio Button 2');
    const radioButton3 = screen.getByLabelText('Radio Button 3');

    const user = userEvent.setup();
    await user.click(radioButton1);
    expect(radioButton1).toBeChecked();
    expect(radioButton2).not.toBeChecked();
    expect(radioButton3).not.toBeChecked();

    await user.click(radioButton2);
    expect(radioButton2).toBeChecked();
    expect(radioButton1).not.toBeChecked();
    expect(radioButton3).not.toBeChecked();

    await user.click(radioButton3);
    expect(radioButton3).toBeChecked();
    expect(radioButton1).not.toBeChecked();
    expect(radioButton2).not.toBeChecked();
  });
});

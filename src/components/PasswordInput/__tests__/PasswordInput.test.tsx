import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/PasswordInput.stories';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Base, DefaultShowPassword } = composeStories(stories);

describe('Default passwordInput', () => {
  it('should render the password input with the default hide password', () => {
    render(<Base />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'password');
    const eyeOpenIcon = screen.getByTestId('eye-open-icon');
    expect(eyeOpenIcon).toBeInTheDocument();
  });

  it('should reveal the password after click the eye icon', async () => {
    render(<Base />);
    const user = userEvent.setup();
    const input = screen.getByTestId('input');
    await user.clear(input);
    await user.type(input, 'password');
    const eyeOpenIcon = screen.getByTestId('eye-open-icon');
    await user.click(eyeOpenIcon);
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('password');
    const eyeClosedIcon = screen.getByTestId('eye-closed-icon');
    expect(eyeClosedIcon).toBeInTheDocument();
  });
});

describe('PasswordInput default show password', () => {
  it('should render the password input with the default show password', () => {
    render(<DefaultShowPassword />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'text');
    const eyeClosedIcon = screen.getByTestId('eye-closed-icon');
    expect(eyeClosedIcon).toBeInTheDocument();
  });
});
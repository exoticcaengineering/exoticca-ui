import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Input.stories';
import { composeStories } from '@storybook/react';

const {
  Base,
  LeftRounded,
  RightRounded,
  WithStartIcon,
  WithEndIcon,
  ReadOnly,
  Disabled,
} = composeStories(stories);

describe('Input', () => {
  it('renders the input correctly', () => {
    render(<Base />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  it('renders the input label', () => {
    render(<Base />);
    const label = screen.getByText(/Label/);
    expect(label).toBeInTheDocument();
  });

  it('shows the input placeholder', () => {
    render(<Base />);
    const label = screen.getByPlaceholderText(/Placeholder/);
    expect(label).toHaveAttribute('placeholder');
  });

  it('render input completely rounded', () => {
    render(<Base />);
    const input = screen.getByTestId('input');
    expect(input).toHaveStyle('border-radius: 24px');
  });

  it('render input with left side rounded', () => {
    render(<LeftRounded />);
    const input = screen.getByTestId('input');
    expect(input).toHaveStyle('border-radius: 24px 0 0 24px');
  });

  it('render input with right side rounded', () => {
    render(<RightRounded />);
    const input = screen.getByTestId('input');
    expect(input).toHaveStyle('border-radius: 0 24px 24px 0');
  });

  it('render input with start icon', () => {
    render(<WithStartIcon />);
    const icon = screen.queryByTitle('user-icon');
    expect(icon).toBeInTheDocument();
  });

  it('render input with end icon', () => {
    render(<WithEndIcon />);
    const icon = screen.queryByTitle('contact-icon');
    expect(icon).toBeInTheDocument();
  });

  it('render read only input', () => {
    render(<ReadOnly />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });

  it('render disabled input', () => {
    render(<Disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('disabled');
  });

  it('writes some value into the input', () => {
    render(<Base />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});

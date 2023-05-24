import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Button.stories';

const {
  Primary,
  Secondary,
  Tertiary,
  WithStartIcon,
  WithEndIcon,
  WithStartIconLoading,
  WithEndIconLoading,
  Disabled,
} = composeStories(stories);

describe('Typography', () => {
  it('renders text correctly', () => {
    render(<Primary />);
    const text = screen.getByText('I am a button');
    expect(text).toBeInTheDocument();
  });

  //primary
  it('renders primary button correctly', () => {
    render(<Primary />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: #121212');
    expect(button).toHaveStyle('color: #ffffff');
    expect(button).toHaveStyle('border-color: transparent');
  });
  //secondary
  it('renders secondary button correctly', () => {
    render(<Secondary />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: transparent');
    expect(button).toHaveStyle('color: #121212');
    expect(button).toHaveStyle('border-color: #121212');
  });

  //tertiary
  it('renders tertiary button correctly', () => {
    render(<Tertiary />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: transparent');
    expect(button).toHaveStyle('color: #121212');
    expect(button).toHaveStyle('border-color: transparent');
  });

  //start icon
  it('renders start icon correctly', () => {
    render(<WithStartIcon />);
    const icon = screen.getByTitle('calendar');
    expect(icon).toBeInTheDocument();
  });

  //end icon
  it('renders end icon correctly', () => {
    render(<WithEndIcon />);
    const icon = screen.getByTitle('calendar');
    expect(icon).toBeInTheDocument();
  });

  //start icon loading
  it('renders start icon loading correctly', () => {
    render(<WithStartIconLoading />);
    const loadingIcon = screen.getByTitle('loader');
    expect(loadingIcon).toBeInTheDocument();
    const startIcon = screen.queryByTitle('calendar');
    expect(startIcon).not.toBeInTheDocument();
  });

  //end icon loading
  it('renders end icon loading correctly', () => {
    render(<WithEndIconLoading />);
    const loadingIcon = screen.getByTitle('loader');
    expect(loadingIcon).toBeInTheDocument();
    const endIcon = screen.queryByTitle('calendar');
    expect(endIcon).not.toBeInTheDocument();
  });
});

import { render, screen, within } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Button.stories';

const { Variations, Sizes, Shapes, WithIconAndLoading, States } =
  composeStories(stories);

describe('Button variations', () => {
  // //primary
  it('renders primary button correctly', () => {
    render(<Variations />);
    const primaryButton = screen.getByText('primary button').closest('button');
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveStyle('background-color: #121212');
    expect(primaryButton).toHaveStyle('color: #ffffff');
    expect(primaryButton).toHaveStyle('border-color: transparent');
  });
  // //secondary
  it('renders secondary button correctly', () => {
    render(<Variations />);
    const secondaryButton = screen
      .getByText('secondary button')
      .closest('button');
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton).toHaveStyle('background-color: transparent');
    expect(secondaryButton).toHaveStyle('color: #121212');
    expect(secondaryButton).toHaveStyle('border-color: #121212');
  });

  // //tertiary
  it('renders tertiary button correctly', () => {
    render(<Variations />);
    const tertiaryButton = screen
      .getByText('tertiary button')
      .closest('button');
    expect(tertiaryButton).toBeInTheDocument();
    expect(tertiaryButton).toHaveStyle('background-color: transparent');
    expect(tertiaryButton).toHaveStyle('color: #121212');
    expect(tertiaryButton).toHaveStyle('border-color: transparent');
  });

  // //start icon
  // it('renders start icon correctly', () => {
  //   render(<WithStartIcon />);
  //   const icon = screen.getByTitle('calendar');
  //   expect(icon).toBeInTheDocument();
  // });

  // //end icon
  // it('renders end icon correctly', () => {
  //   render(<WithEndIcon />);
  //   const icon = screen.getByTitle('calendar');
  //   expect(icon).toBeInTheDocument();
  // });

  // //start icon loading
  // it('renders start icon loading correctly', () => {
  //   render(<WithStartIconLoading />);
  //   const loadingIcon = screen.getByTitle('loader');
  //   expect(loadingIcon).toBeInTheDocument();
  //   const startIcon = screen.queryByTitle('calendar');
  //   expect(startIcon).not.toBeInTheDocument();
  // });

  // //end icon loading
  // it('renders end icon loading correctly', () => {
  //   render(<WithEndIconLoading />);
  //   const loadingIcon = screen.getByTitle('loader');
  //   expect(loadingIcon).toBeInTheDocument();
  //   const endIcon = screen.queryByTitle('calendar');
  //   expect(endIcon).not.toBeInTheDocument();
  // });
});

describe('Button sizes', () => {
  it('renders small button correctly', () => {
    render(<Sizes />);
    const smallButton = screen.getByText('small button').closest('button');
    expect(smallButton).toBeInTheDocument();
    expect(smallButton).toHaveStyle('padding: 11px');
    expect(smallButton).toHaveStyle('font-size: 0.875rem');
  });
  it('renders medium button correctly', () => {
    render(<Sizes />);
    const mediumButton = screen.getByText('medium button').closest('button');
    expect(mediumButton).toBeInTheDocument();
    expect(mediumButton).toHaveStyle('padding: 16px 18px');
    expect(mediumButton).toHaveStyle('font-size: 1rem');
  });
  it('renders large button correctly', () => {
    render(<Sizes />);
    const largeButton = screen.getByText('large button').closest('button');
    expect(largeButton).toBeInTheDocument();
    expect(largeButton).toHaveStyle('padding: 18px 22px');
    expect(largeButton).toHaveStyle('font-size: 1.25rem');
  });
});

describe('Button shapes', () => {
  it('renders square button correctly', () => {
    render(<Shapes />);
    const squareButton = screen.getByText('square button').closest('button');
    expect(squareButton).toBeInTheDocument();
    expect(squareButton).toHaveStyle('border-radius: 12px');
  });
  it('renders rounded button correctly', () => {
    render(<Shapes />);
    const roundedButton = screen.getByText('rounded button').closest('button');
    expect(roundedButton).toBeInTheDocument();
    expect(roundedButton).toHaveStyle('border-radius: 100px');
  });
});

describe('Button states', () => {
  it('renders button loading correctly', () => {
    render(<States />);
    const loadingButton = screen.getByText('button loading').closest('button');
    expect(loadingButton).toBeInTheDocument();
    const loaderIcon = screen.getByTitle('loader');
    expect(loaderIcon).toBeInTheDocument();
  });

  it('renders primary button disabled correctly', () => {
    render(<States />);
    const disabledButton = screen
      .getByText('primary button disabled')
      .closest('button');
    expect(disabledButton).toBeInTheDocument();
    expect(disabledButton).toHaveStyle('cursor: not-allowed');
    expect(disabledButton).toHaveStyle('background-color: rgba(18,18,18,0.2)');
    expect(disabledButton).toHaveStyle('border-color: transparent');
    expect(disabledButton).toHaveStyle('color: #717171');
  });

  it('renders secondary button disabled correctly', () => {
    render(<States />);
    const disabledButton = screen
      .getByText('secondary button disabled')
      .closest('button');
    expect(disabledButton).toBeInTheDocument();
    expect(disabledButton).toHaveStyle('cursor: not-allowed');
    expect(disabledButton).toHaveStyle('background-color: transparent');
    expect(disabledButton).toHaveStyle('border-color: #717171');
    expect(disabledButton).toHaveStyle('color: #717171');
  });

  it('renders tertiary button disabled correctly', () => {
    render(<States />);
    const disabledButton = screen
      .getByText('tertiary button disabled')
      .closest('button');
    expect(disabledButton).toBeInTheDocument();
    expect(disabledButton).toHaveStyle('cursor: not-allowed');
    expect(disabledButton).toHaveStyle('background-color: transparent');
    expect(disabledButton).toHaveStyle('border-color: transparent');
    expect(disabledButton).toHaveStyle('color: #717171');
  });
});

describe('Button with icon and loading', () => {
  it('renders start icon correctly', () => {
    render(<WithIconAndLoading />);
    const startIconButton = screen
      .getByText('start icon')
      .closest('button') as HTMLButtonElement;
    const icon = within(startIconButton).getByTitle('calendar');
    expect(icon).toBeInTheDocument();
  });
  it('renders start icon loading correctly', () => {
    render(<WithIconAndLoading />);
    const startIconButton = screen
      .getByText('start icon loading')
      .closest('button') as HTMLButtonElement;
    const loadingIcon = within(startIconButton).getByTitle('loader');
    expect(loadingIcon).toBeInTheDocument();
    const icon = within(startIconButton).queryByTitle('calendar');
    expect(icon).not.toBeInTheDocument();
  });

  it('renders end icon correctly', () => {
    render(<WithIconAndLoading />);
    const endIconButton = screen
      .getByText('start icon')
      .closest('button') as HTMLButtonElement;
    const icon = within(endIconButton).getByTitle('calendar');
    expect(icon).toBeInTheDocument();
  });

  it('renders end icon loading correctly', () => {
    render(<WithIconAndLoading />);
    const endIconButton = screen
      .getByText('start icon loading')
      .closest('button') as HTMLButtonElement;
    const loadingIcon = within(endIconButton).getByTitle('loader');
    expect(loadingIcon).toBeInTheDocument();
    const icon = within(endIconButton).queryByTitle('calendar');
    expect(icon).not.toBeInTheDocument();
  });
});

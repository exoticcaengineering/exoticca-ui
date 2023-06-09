import { composeStories } from '@storybook/react';
import * as stories from '../__stories__/Header.stories';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from 'src/themes';

const { LeftCenterRight, LeftCenter, LeftRight, CenterRight } =
  composeStories(stories);

describe('Header', () => {
  it('should be transparent', () => {
    render(
      <ThemeProvider theme={themeDefault}>
        <Header background="header" backgroundShade="light" />
      </ThemeProvider>,
    );

    const header = screen.getByRole('heading');

    expect(header).toHaveStyleRule(
      'background',
      themeDefault.colors.transparent,
    );
  });

  it('should be solid', () => {
    render(
      <ThemeProvider theme={themeDefault}>
        <Header background="header" />
      </ThemeProvider>,
    );

    const header = screen.getByRole('heading');

    expect(header).toHaveStyleRule(
      'background',
      themeDefault.colors.polarNight,
    );
  });

  it('should show left, center and right components', () => {
    render(<LeftCenterRight />);

    const leftComponent = screen.getByText(/Left/i);
    const centerComponent = screen.getByText(/Center/i);
    const rightComponent = screen.getByText(/Right/i);

    expect(leftComponent).toBeInTheDocument();
    expect(centerComponent).toBeInTheDocument();
    expect(rightComponent).toBeInTheDocument();
  });

  it('should show left and center components', () => {
    render(<LeftCenter />);

    const leftComponent = screen.getByText(/Left/i);
    const centerComponent = screen.getByText(/Center/i);
    const rightComponent = screen.queryByText(/Right/i);

    expect(leftComponent).toBeInTheDocument();
    expect(centerComponent).toBeInTheDocument();
    expect(rightComponent).not.toBeInTheDocument();
  });

  it('should show left and right components', () => {
    render(<LeftRight />);

    const leftComponent = screen.getByText(/Left/i);
    const centerComponent = screen.queryByText(/Center/i);
    const rightComponent = screen.getByText(/Right/i);

    expect(leftComponent).toBeInTheDocument();
    expect(centerComponent).not.toBeInTheDocument();
    expect(rightComponent).toBeInTheDocument();
  });

  it('should show center and right components', () => {
    render(<CenterRight />);

    const leftComponent = screen.queryByText(/Left/i);
    const centerComponent = screen.getByText(/Center/i);
    const rightComponent = screen.getByText(/Right/i);

    expect(leftComponent).not.toBeInTheDocument();
    expect(centerComponent).toBeInTheDocument();
    expect(rightComponent).toBeInTheDocument();
  });
});

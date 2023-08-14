import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/Alert/__stories__/Alert.stories';

const { Info, Success, Warning, Rounded } = composeStories(stories);

describe('Alert', () => {
  test('should render alert', () => {
    render(<Info />);

    const alert = screen.getByTestId('alert');
    expect(alert).toBeInTheDocument();
  });

  test('should render alert with title', () => {
    render(<Info />);

    const title = screen.getByText('Alert title');
    expect(title).toBeInTheDocument();
  });

  test('should render alert with text', () => {
    render(<Info />);

    const text = screen.getByText('This is an alert');
    expect(text).toBeInTheDocument();
  });

  test('should render alert with icon', () => {
    render(<Info />);

    const icon = screen.getByTestId('info-icon');
    expect(icon).toBeInTheDocument();
  });

  test('should render with success border color', () => {
    render(<Success />);

    const alert = screen.getByTestId('alert');
    expect(alert).toHaveStyle('border-color: #67d071');
  });

  test('should render with warning border color', () => {
    render(<Warning />);

    const alert = screen.getByTestId('alert');
    expect(alert).toHaveStyle('border-color: #c93957');
  });

  test('should render with borders rounded', () => {
    render(<Rounded />);

    const alert = screen.getByTestId('alert');
    expect(alert).toHaveStyle('border-radius: 100px');
  });
});

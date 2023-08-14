import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/Alert/__stories__/Alert.stories';

const { Success, Error } = composeStories(stories);

describe('Alert', () => {
  test('should render alert', () => {
    render(<Success />);

    const alert = screen.getByTestId('alert');
    expect(alert).toBeInTheDocument();
  });

  test('should render alert with text', () => {
    render(<Success />);

    const alert = screen.getByText('This is an alert');
    expect(alert).toBeInTheDocument();
  });

  test('should render alert with icon', () => {
    render(<Success />);

    const icon = screen.getByTestId('info-icon');
    expect(icon).toBeInTheDocument();
  });

  test('should render with warning border color', () => {
    render(<Error />);

    const alert = screen.getByTestId('alert');
    expect(alert).toHaveStyle('border-color: #c93957');
  });
});

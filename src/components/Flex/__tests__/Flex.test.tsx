import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/Flex/__stories__/Flex.stories';

const { Centered, Column, End, SpaceAround, SpaceBetween, Start } =
  composeStories(stories);

describe('Flex', () => {
  test('should render flex', () => {
    render(<Centered />);

    const flex = screen.getByTestId('flex');
    expect(flex).toBeInTheDocument();
  });

  test('should render flex with column direction', () => {
    render(<Column />);

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ flexDirection: 'column' });
  });

  test('should render flex with items aligned flex-start', () => {
    render(<Start />);

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ flexDirection: 'row' });
  });

  test('should render flex with items aligned flex-end', () => {
    render(<End />);

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ alignItems: 'flex-end' });
  });

  test('should render flex with content centered', () => {
    render(<Centered />);

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ justifyContent: 'center' });
  });

  test('should render flex with space around between content', () => {
    render(<SpaceAround />);

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ justifyContent: 'space-around' });
  });

  test('should render flex with space between between content', () => {
    render(<SpaceBetween />);

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ justifyContent: 'space-between' });
  });
});

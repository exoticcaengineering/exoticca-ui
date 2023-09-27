import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/Grid/__stories__/Grid.stories';

const { Base, WithoutContent } = composeStories(stories);

describe('Grid', () => {
  test('should render wrapper', () => {
    render(<Base />);

    const wrapper = screen.getByTestId('Grid-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  test('should not rendercontent', () => {
    render(<WithoutContent />);
    const contentWrapper = screen.queryByTestId('contentWrapper');
    expect(contentWrapper).not.toBeInTheDocument();
  });
});

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/Banner/__stories__/Banner.stories';

const { Base, WithoutContent } = composeStories(stories);

describe('Banner', () => {
  test('should render wrapper', () => {
    render(<Base />);

    const wrapper = screen.getByTestId('Banner-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  test('should not rendercontent', () => {
    render(<WithoutContent />);
    const contentWrapper = screen.queryByTestId('contentWrapper');
    expect(contentWrapper).not.toBeInTheDocument();
  });
});

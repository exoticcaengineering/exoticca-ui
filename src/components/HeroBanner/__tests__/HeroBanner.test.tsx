import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/HeroBanner/__stories__/HeroBanner.stories';

const { Base, WithoutContent } = composeStories(stories);

describe('HeroBanner', () => {
  test('should render wrapper', () => {
    render(<Base />);

    const wrapper = screen.getByTestId('heroBanner-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  test('should not rendercontent', () => {
    render(<WithoutContent />);
    const contentWrapper = screen.queryByTestId('contentWrapper');
    expect(contentWrapper).not.toBeInTheDocument();
  });
});

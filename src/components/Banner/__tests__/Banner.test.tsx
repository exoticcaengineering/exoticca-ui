import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from 'src/components/Banner/__stories__/Banner.stories';

const { Base } = composeStories(stories);

describe('Grid', () => {
  test('should render wrapper', () => {
    render(<Base />);

    const wrapper = screen.getByTestId('Banner-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});

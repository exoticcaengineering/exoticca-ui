import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/YoYoBar.stories';

const { Base } = composeStories(stories);

describe('YoYoBar', () => {
  it('should show first slide text', async () => {
    render(<Base />);
    const slideText = screen.getByText(
      'Unimaginable places within reach up to 50% off',
    );
    expect(slideText).toBeInTheDocument();
  });
});

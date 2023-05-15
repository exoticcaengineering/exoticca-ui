import { composeStories } from '@storybook/react';
import * as stories from '../__stories__/HeroWrapper.stories';
import { render, screen } from '@testing-library/react';

const { Base } = composeStories(stories);

describe('HeroWrapper', () => {
  it('should be true', () => {
    render(<Base />);
    const title = screen.getByText('Hero wrapper content title');
    const subtitle = screen.getByText('Hero wrapper content subtitle');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});

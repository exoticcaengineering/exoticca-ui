import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Typography.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base, BoldText } = composeStories(stories);

describe('Typography', () => {
  it('renders text correctly', () => {
    render(<Base />);
    const text = screen.getByText('some text');
    expect(text).toBeInTheDocument();
  });

  it('renders text correctly', () => {
    render(<BoldText />);
    const text = screen.getByText('some text');
    expect(text).toHaveStyle('font-weight: 600;');
  });
});

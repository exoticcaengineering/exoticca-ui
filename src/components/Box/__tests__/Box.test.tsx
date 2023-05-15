import { composeStories } from '@storybook/react';
import * as stories from '../__stories__/Box.stories';
import { render, screen } from '@testing-library/react';

const { Base } = composeStories(stories);
describe('Box', () => {
  it('renders correctly', () => {
    render(<Base />);

    const element = screen.getByTestId('basic-box');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('display: block');
  });
});

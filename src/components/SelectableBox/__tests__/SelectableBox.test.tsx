import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/SelectableBox.stories';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Base, Selected, HighlightBox, ClickableBox } = composeStories(stories);

describe('SelectableBox', () => {
  it('should render the selectable box', () => {
    render(<Base />);
    const selectableBox = screen.getByTestId('selectable-box-wrapper');
    expect(selectableBox).toBeInTheDocument();
  });

  it('should render the selectable box with selected icon', () => {
    render(<Selected />);
    const checkIcon = screen.getByTestId('check-icon');
    expect(checkIcon).toBeInTheDocument();
  });

  it('should render the selectable box with highlight text', () => {
    render(<HighlightBox />);
    const highlightText = screen.getByText(/recommended/);
    expect(highlightText).toBeInTheDocument();
  });

  it('when hove on a unselected clickable selectable box, the cursor should be a pointer ', async () => {
    render(<ClickableBox />);
    const selectableBox = screen.getByTestId('selectable-box');
    expect(selectableBox).toHaveStyle('cursor: pointer');
  });

  it('when click on clickable selectable box, the onClick function should be called', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<ClickableBox onClick={onClick} />);
    const selectableBox = screen.getByTestId('selectable-box');
    await user.click(selectableBox);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

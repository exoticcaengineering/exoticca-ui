import { composeStories } from '@storybook/react';
import * as stories from '../__stories__/Tooltip.stories';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { ByClick, ByHover } = composeStories(stories);

describe('Tooltip', () => {
  it('should show text panel when click in icon', async () => {
    render(<ByClick />);

    const title = screen.getByText('Tooltip');
    expect(title).toBeInTheDocument();
    await userEvent.click(screen.getByText('Tooltip'));
    const tooltipPanel = screen.getByTestId('tooltip-panel');

    expect(tooltipPanel).toBeInTheDocument();
  });

  it('should show text panel when hover in icon', async () => {
    render(<ByHover />);

    const title = screen.getByText('Tooltip');
    expect(title).toBeInTheDocument();
    await userEvent.hover(screen.getByText('Tooltip'));
    const tooltipPanel = screen.getByTestId('tooltip-panel');

    expect(tooltipPanel).toBeInTheDocument();
  });
});

import { render, screen, within } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Modal.stories';
import userEvent from '@testing-library/user-event';

const { Basic, WithHeader, WithBottomActionButton, FullScreen, NonClosable } =
  composeStories(stories);

describe('Modal', () => {
  it('renders basic modal correctly', async () => {
    render(<Basic />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    const modalContent = screen.getByText('This is a basic modal');
    expect(modalContent).toBeInTheDocument();
  });

  it('renders modal with header correctly', async () => {
    render(<WithHeader />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const modalHeader = screen.getByText('Modal header');
    expect(modalHeader).toBeInTheDocument();
  });
});

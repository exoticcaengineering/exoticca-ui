import { render, screen } from '@testing-library/react';
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

  it('Close modal when clicking on the close icon ', async () => {
    render(<Basic />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const closeIconButton = screen.getByTestId('modal-close-button');
    await user.click(closeIconButton);
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
    const body = document.body;
    expect(body).not.toHaveClass('disableScroll');
  });

  it('Close modal when clicking on the background shade ', async () => {
    render(<Basic />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const shade = screen.getByRole('layout');
    await user.click(shade);
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
    const body = document.body;
    expect(body).not.toHaveClass('disableScroll');
  });

  it('When open modal, body should have disableScroll class', async () => {
    render(<Basic />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const body = document.body;
    expect(body).toHaveClass('disableScroll');
  });

  it('renders modal with header correctly', async () => {
    render(<WithHeader />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const modalHeader = screen.getByText('Modal header');
    expect(modalHeader).toBeInTheDocument();
  });

  it('renders modal with bottom action button correctly', async () => {
    const onClickMock = jest.fn();
    render(
      <WithBottomActionButton
        bottomActionButton={{
          text: 'Click here',
          onClick: onClickMock,
        }}
      />,
    );
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const actionButton = screen.getByText('Click here');
    expect(actionButton).toBeInTheDocument();
    await user.click(actionButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders full screen modal correctly', async () => {
    render(<FullScreen />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const modalWrapper = screen.getByRole('dialog');
    expect(modalWrapper).toHaveStyle('inset: 0');
  });

  it('renders non closable modal correctly, and the modal can not be closed', async () => {
    render(<NonClosable />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    const modalWrapper = screen.getByRole('dialog');
    expect(modalWrapper).toBeInTheDocument();
    const closeIconButton = screen.queryByTestId('modal-close-button');
    expect(closeIconButton).not.toBeInTheDocument();
    const shade = screen.getByRole('layout');
    await user.click(shade);
    const modal = screen.queryByRole('dialog');
    expect(modal).toBeInTheDocument();
  });
});

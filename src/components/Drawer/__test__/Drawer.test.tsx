import * as stories from '../__stories__/Drawer.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Base, WithCustomTrigger } = composeStories(stories);

describe('Drawer', () => {
  it('should open when click in button', async () => {
    render(<Base />);

    const button = screen.getByText(/Open Drawer/i);

    await userEvent.click(button);

    const drawer = await screen.findByRole('navigation');

    expect(drawer).toBeInTheDocument();
  });

  it('should not be in the document when render', () => {
    render(<Base />);

    const drawer = screen.queryByRole('navigation');

    expect(drawer).not.toBeInTheDocument();
  });

  it('should show content inside drawer', async () => {
    render(<Base />);

    const button = screen.getByText(/Open Drawer/i);

    await userEvent.click(button);

    const content = await screen.findByText(/Drawer contents/i);

    expect(content).toBeInTheDocument();
  });

  it('should render custom trigger', async () => {
    render(<WithCustomTrigger />);

    const button = screen.getByText(/Open Drawer/i);

    await userEvent.click(button);

    const customTrigger = screen.getByText(/Close/);

    expect(customTrigger).toBeInTheDocument();
  });

  it('should close drawer if click on custom trigger', async () => {
    render(<WithCustomTrigger />);

    const button = screen.getByText(/Open Drawer/i);

    await userEvent.click(button);

    const customTrigger = screen.getByText(/Close/);

    await userEvent.click(customTrigger);

    expect(customTrigger).not.toBeInTheDocument();
  });
});

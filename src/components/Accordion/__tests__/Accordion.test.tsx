import { render, screen, within } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Accordion.stories';
import userEvent from '@testing-library/user-event';

const { Base, WithStartIcon } = composeStories(stories);

describe('Accordion ', () => {
  // test arrow icon is visible
  test('should render start icon', async () => {
    render(<WithStartIcon />);
    const accordion = screen.getByTestId('accordion');
    const startIcon = within(accordion).getByTitle('arrow');
    expect(startIcon).toBeInTheDocument();
  });

  // test render title and content is hided
  test('should render title and content is hided', async () => {
    render(<Base />);
    const accordion = screen.getByTestId('accordion');
    const title = within(accordion).getByText('I am a Header Text');
    const content = within(accordion).queryByTestId('accordion-content');
    expect(title).toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });

  // test when click on title, content is visible
  test('should render title and content is hided', async () => {
    render(<Base />);
    const accordion = screen.getByTestId('accordion');
    const title = within(accordion).getByText('I am a Header Text');
    await userEvent.click(title);
    const content = within(accordion).getByTestId('accordion-content');
    expect(content).toBeVisible();
    expect(content.textContent).toContain('Accordion content');
  });
});

describe('Accordion with start icon', () => {
  // test start icon is visible
  test('should render start icon', async () => {
    render(<WithStartIcon />);
    const accordionHeader = screen.getByTestId('accordion-header');
    const startIcon = within(accordionHeader).getByTitle('calendar');
    expect(startIcon).toBeInTheDocument();
  });
});

import { render, screen, within } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Accordion.stories';
import userEvent from '@testing-library/user-event';

const { Base, DefaultOpen, Disabled, WithStartIcon } = composeStories(stories);

describe('Accordion ', () => {
  // test arrow icon is visible
  test('should render start icon', () => {
    render(<WithStartIcon />);
    const accordion = screen.getByTestId('accordion');
    const startIcon = within(accordion).getByTitle('arrow-icon');
    expect(startIcon).toBeInTheDocument();
  });

  // test render title and content is hided
  test('should render title and content is hided', () => {
    render(<Base />);
    const accordion = screen.getByTestId('accordion');
    const title = within(accordion).getByText('I am a Header Text');
    expect(title).toBeInTheDocument();

    const content = within(accordion).getByTestId('accordion-content');
    expect(content).toHaveStyle('grid-template-rows: 0fr');
  });

  // test when click on title, content is visible
  test('should render title and content is hided', async () => {
    render(<Base />);
    const accordion = screen.getByTestId('accordion');
    const title = within(accordion).getByText('I am a Header Text');
    await userEvent.click(title);
    const content = within(accordion).getByTestId('accordion-content');
    expect(content).toHaveStyle('grid-template-rows: 1fr');
  });
});

describe('Accordion with start icon', () => {
  // test start icon is visible
  test('should render start icon', async () => {
    render(<WithStartIcon />);
    const accordionHeader = screen.getByTestId('accordion-header');
    const startIcon = await within(accordionHeader).findByTitle(
      'calendar-icon',
    );
    expect(startIcon).toBeInTheDocument();
  });
});

describe('Accordion with default open', () => {
  // test content is visible by default
  test('should render content is visible by default', () => {
    render(<DefaultOpen />);
    const accordion = screen.getByTestId('accordion');
    const content = within(accordion).getByTestId('accordion-content');
    expect(content).toHaveStyle('grid-template-rows: 1fr');
  });
});

describe('Accordion is disabled', () => {
  // test content is visible by default
  test('should render content is visible by default', async () => {
    render(<Disabled />);
    const accordion = screen.getByTestId('accordion');
    const headerWrapper = within(accordion).getByTestId(
      'accordion-header-wrapper',
    );
    expect(headerWrapper).toHaveStyle('cursor: not-allowed');

    const content = within(accordion).getByTestId('accordion-content');
    expect(content).toHaveStyle('grid-template-rows: 0fr');

    //after click on title, the content is still hidden
    const title = within(accordion).getByText('I am a Header Text');
    await userEvent.click(title);
    expect(content).toHaveStyle('grid-template-rows: 0fr');
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../__stories__/FilterInput.stories';
import { composeStories } from '@storybook/react';

const { Base } = composeStories(stories);

describe('FilterInput', () => {
  it('should render FilterInput', () => {
    render(<Base />);
    const filterInput = screen.getByTestId('filter-input');
    expect(filterInput).toBeInTheDocument();
  });

  it('should have items when dropdown is open', () => {
    render(<Base />);
    const filterInput = screen.getByTestId('filter-input');
    // Open dropdown
    fireEvent.click(filterInput);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);
  });

  it('should update the value when item selected', () => {
    render(<Base />);
    const filterInput = screen.getByTestId('filter-input');
    // Open dropdown
    fireEvent.click(filterInput);
    const listItems = screen.getAllByRole('listitem');
    // Select first item in the dropdown
    fireEvent.click(listItems[0]);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Item 1');
  });

  it("shouldn't update the value if clicked outside the dropdown", () => {
    render(<Base />);
    const filterInput = screen.getByTestId('filter-input');
    // Open dropdown
    fireEvent.click(filterInput);
    // Select outside the dropdown
    fireEvent.click(document.body);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
});

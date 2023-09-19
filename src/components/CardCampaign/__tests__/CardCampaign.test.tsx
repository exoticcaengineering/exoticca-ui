import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/CardCampaign.stories';

const { Base } = composeStories(stories);

it('should render a card with correct title and day data', () => {
  const title = 'Parques, lagos y gorilas de montaña';
  const daysText = '5 days';
  const id = 123;

  render(<Base />);

  expect(screen.getByTestId(id)).toBeInTheDocument();
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(daysText)).toBeInTheDocument();
});

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from '../__stories__/CardCampaign.stories';

const { Base } = composeStories(stories);
const title = 'Parques, lagos y gorilas de montaña';
const daysText = '5 days';
const pillText = /OFERTA FLASH/;
const newText = /New/;
const imgProp = [
  {
    url: 'http://d3u4a4x0o6wh6h.cloudfront.net/img/p/6945/c155310.jpg',
    text: '',
  },
];

describe('render Base UI elements', () => {
  test('should render card with title, day data and no isNew element', () => {
    render(<Base />);
    const isNewElement = screen.queryByText(newText);
    const titleElement = screen.getByText(title);
    const daysElement = screen.getByText(daysText);
    expect(isNewElement).not.toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(daysElement).toBeInTheDocument();
  });

  test('should render image with correct src', async () => {
    render(<Base image={imgProp} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', imgProp[0].url);
  });

  test('should render isNew element if props dictate', async () => {
    render(<Base isNew={true} tagHeadLine={[]} />);
    const isNewElement = screen.getByText(newText);
    expect(isNewElement).toBeInTheDocument();
  });
});

describe('Test PillTag logic', () => {
  test('should render no pill tag if no corresponding prop', () => {
    render(<Base tagHeadLine={[]} />);
    const pillTag = screen.queryByText(pillText);
    expect(pillTag).not.toBeInTheDocument();
  });

  test('should render pill tag if receiving corresponding prop', async () => {
    render(<Base />);
    const pillTag = screen.getByText(pillText);
    expect(pillTag).toBeInTheDocument();
  });

  test('should trigger pillTagClickEvent callback upon clicking pill', async () => {
    const onClickMock = jest.fn();
    render(<Base pillTagClickEvent={onClickMock} />);
    const pillTag = screen.getByText(pillText);
    const user = userEvent.setup();
    await user.click(pillTag);
    expect(onClickMock).toHaveBeenCalled();
  });
});

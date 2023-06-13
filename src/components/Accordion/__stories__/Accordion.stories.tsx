import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../Accordion';
import { Typography } from 'src/components/Typography';
import { Wrapper } from './Story.styles';

/**
 * ## Accordion is a component that can be used to hide and show content.
 */
export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  args: {
    isDisabled: false,
    withHeaderTitle: true,
    header: <Typography fontSize="heading3">I am a Header Text</Typography>,
    isOpen: false,
    content: (
      <Typography fontSize="body1">
        Accordion content. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam feugiat risus eu varius fringilla. Fusce luctus ipsum vitae
        nunc tincidunt, id tincidunt mauris accumsan.
      </Typography>
    ),
  },
  argTypes: {},
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

/**
 * Both Accordions's header and content con be a string or a component. But it's better to use a component.Because with string we can't control the font size and color. The default font size is 1rem
 */
export const Base: Story = {
  render: (args) => <Accordion {...args} />,
};

/**
 * Accordions also can take a startIcon props to show an icon at the start of the header.
 */
export const WithStartIcon: Story = {
  args: {
    startIcon: { icon: 'calendar' },
  },
  render: (args) => <Accordion {...args} />,
};

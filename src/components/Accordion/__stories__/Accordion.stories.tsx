import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../Accordion';
import { Typography } from 'src/components/Typography';
import { Wrapper } from './Story.styles';
import { CustomTriggerProps } from '../Accordion.types';
import { Button } from 'src/components/Button';
import { ArrowDownCircleIcon, CalendarIcon } from 'src/components/SvgIcons';

/**
 * ## Accordion is a component that can be used to hide and show content.
 */
const meta: Meta<typeof Accordion> = {
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
};

export default meta;

type Story = StoryObj<typeof Accordion>;

/**
 * Both Accordions's header and content con be a string or a component. But it's better to use a component.Because with string we can't control the font size and color. The default font size is 1rem
 */
export const Base: Story = {
  render: (args) => <Accordion {...args} />,
};

/**
 * We can pass a isOpen props to Accordions, to make it open by default.
 */
export const DefaultOpen: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => <Accordion {...args} />,
};

/**
 * We can pass a isDisabled props to Accordions, to make it disabled.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => <Accordion {...args} />,
};

/**
 * Accordions  can take a startIcon props to show an icon at the start of the header.
 */
export const WithStartIcon: Story = {
  args: {
    startIcon: <CalendarIcon />,
  },
  render: (args) => <Accordion {...args} />,
};

/**
 * Accordions  can take a endIcon props to show an icon at the end of the header.
 */
export const WithEndIcon: Story = {
  args: {
    endIcon: <ArrowDownCircleIcon />,
  },
  render: (args) => <Accordion {...args} />,
};

const CustomTrigger = ({ isOpen, onClick }: CustomTriggerProps) => {
  return (
    <Button
      onClick={onClick}
      text={isOpen ? 'Close' : 'Open'}
      size="small"
      variant="secondary"
      shape="square"
    />
  );
};

/**
 * Accordions can take a customTrigger props to show a custom trigger.
 * with customer trigger, the accordion will not open or close when we click on the header.
 * we have to handle the open and close state by clicking on the trigger.
 */
export const WithCustomTrigger: Story = {
  args: {
    CustomTrigger: CustomTrigger,
  },
  render: (args) => <Accordion {...args} />,
};

const CustomTriggerEnd = ({ isOpen, onClick }: CustomTriggerProps) => {
  return (
    <Button
      onClick={onClick}
      text={isOpen ? 'Close' : 'Open'}
      size="small"
      variant="secondary"
      shape="square"
    />
  );
};

/**
 * Accordions can take a customTriggerEnd props to show a custom trigger at the end of the content.
 * with customer trigger, the accordion will not open or close when we click on the header.
 * we have to handle the open and close state by clicking on the trigger.
 */
export const WithCustomTriggerEnd: Story = {
  args: {
    CustomTriggerEnd: CustomTriggerEnd,
  },
  render: (args) => <Accordion {...args} />,
};

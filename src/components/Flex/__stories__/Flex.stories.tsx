import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Flex } from 'src/components/Flex';
import { Props } from 'src/components/Flex/Flex.types';

const directions = ['column', 'row', 'row-reverse', 'column-reverse'];
const alignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const justifyContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

export default {
  title: 'Components/Flex',
  component: Flex,
  args: {
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'row',
    gap: 2,
    testId: 'flex',
  },
  argTypes: {
    direction: {
      options: directions,
      control: { type: 'select' },
    },
    alignItems: {
      options: alignItems,
      control: { type: 'select' },
    },
    justifyContent: {
      options: justifyContent,
      control: { type: 'select' },
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof Flex> = ({ ...props }) => {
  return (
    <Flex {...props}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Flex>
  );
};

export const Centered: Story = { render: (args) => <Template {...args} /> };

export const Start: Story = {
  render: (args) => (
    <Template {...args} alignItems="flex-start" justifyContent="flex-start" />
  ),
};

export const End: Story = {
  render: (args) => (
    <Template {...args} alignItems="flex-end" justifyContent="flex-end" />
  ),
};

export const SpaceBetween: Story = {
  render: (args) => <Template {...args} justifyContent="space-between" />,
};

export const SpaceAround: Story = {
  render: (args) => <Template {...args} justifyContent="space-around" />,
};

export const Column: Story = {
  render: (args) => <Template {...args} direction="column" />,
};

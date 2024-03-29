import { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'src/components/Flex';

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

const meta: Meta<typeof Flex> = {
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
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Template = ({ ...props }) => {
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

import { Meta, StoryObj } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Tooltip } from '../Tooltip';
import { Typography } from 'src/components/Typography';
import { Props } from '../Tooltip.types';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const Template = (args: Props) => (
  <Box padding={[20]}>
    <Tooltip {...args}>
      <Typography fontSize="default">Tooltip</Typography>
    </Tooltip>
  </Box>
);

export const ByClick: Story = {
  args: {
    triggerBy: 'click',
    position: 'right',
    content:
      'Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit. Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit. Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  render: (args) => <Template {...args} />,
};

export const ByHover: Story = {
  args: {
    triggerBy: 'hover',
    position: 'right',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const LeftPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'left',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const TopPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'top',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const TopLeftPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'top-left',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const TopRightPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'top-right',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const BottomPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'bottom',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const BottomLeftPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'bottom-left',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

export const BottomRightPosition: Story = {
  args: {
    triggerBy: 'click',
    position: 'bottom-right',
    content: 'Tooltip content',
  },
  render: (args) => <Template {...args} />,
};

const TooltipCustomContent = () => {
  return (
    <div>
      <Typography>custom tooltip content</Typography>
      <Typography>it can be any react component</Typography>
    </div>
  );
};

export const CustomContent: Story = {
  args: {
    triggerBy: 'hover',
    position: 'right',
    content: <TooltipCustomContent />,
  },
  render: (args) => <Template {...args} />,
};

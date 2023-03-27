import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Box } from 'src/components/Box';
import { Tooltip } from '../Tooltip';
import { Typography } from 'src/components/Typography';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Box padding={[20]}>
    <Tooltip {...args}>
      <Typography fontSize="default">Tooltip</Typography>
    </Tooltip>
  </Box>
);

export const ByClick = Template.bind({});

ByClick.args = {
  triggerBy: 'click',
  position: 'right',
  content:
    'Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit. Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit. Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

ByClick.play = async ({ canvasElement }) => {
  const body = within(document.body);
  const canvas = within(canvasElement);
  const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
  await expect(tooltipTrigger).toBeInTheDocument();

  await userEvent.click(tooltipTrigger);
  const tooltipPanel = body.getByTestId('tooltip-panel');

  await expect(tooltipPanel).toBeInTheDocument();
  const content = within(tooltipPanel).getByText(
    'Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit. Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit. Tooltip content lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  );
  expect(content).toBeInTheDocument();
};

export const ByHover = Template.bind({});

ByHover.args = {
  triggerBy: 'hover',
  position: 'right',
  content: 'Tooltip content',
};

ByHover.play = async ({ canvasElement }) => {
  const body = within(document.body);
  const canvas = within(canvasElement);
  const tooltipTrigger = canvas.getByTestId('tooltip-trigger');
  await expect(tooltipTrigger).toBeInTheDocument();

  await userEvent.hover(tooltipTrigger);
  const tooltipPanel = body.getByTestId('tooltip-panel');
  await expect(tooltipPanel).toBeInTheDocument();
  const content = within(tooltipPanel).getByText('Tooltip content');
  expect(content).toBeInTheDocument();
};

export const LeftPosition = Template.bind({});

LeftPosition.args = {
  triggerBy: 'click',
  position: 'left',
  content: 'Tooltip content',
};

LeftPosition.play = async ({ canvasElement }) => {
  const body = within(document.body);
  const canvas = within(canvasElement);
  const tooltipTrigger = canvas.getByTestId('tooltip-trigger');

  await expect(tooltipTrigger).toBeInTheDocument();

  await userEvent.click(tooltipTrigger);
  const tooltipPanel = body.getByTestId('tooltip-panel');

  await expect(tooltipPanel).toBeInTheDocument();
  const content = within(tooltipPanel).getByText('Tooltip content');
  expect(content).toBeInTheDocument();
};

export const TopPosition = Template.bind({});

TopPosition.args = {
  triggerBy: 'click',
  position: 'top',
  content: 'Tooltip content',
};

export const TopLeftPosition = Template.bind({});

TopLeftPosition.args = {
  triggerBy: 'click',
  position: 'top-left',
  content: 'Tooltip content',
};

export const TopRightPosition = Template.bind({});

TopRightPosition.args = {
  triggerBy: 'click',
  position: 'top-right',
  content: 'Tooltip content',
};

export const BottomPosition = Template.bind({});

BottomPosition.args = {
  triggerBy: 'click',
  position: 'bottom',
  content: 'Tooltip content',
};

export const BottomLeftPosition = Template.bind({});

BottomLeftPosition.args = {
  triggerBy: 'click',
  position: 'bottom-left',
  content: 'Tooltip content',
};

export const BottomRightPosition = Template.bind({});

BottomRightPosition.args = {
  triggerBy: 'click',
  position: 'bottom-right',
  content: 'Tooltip content',
};

export const CustomContent = Template.bind({});

const TooltipCustomContent = () => {
  return (
    <div>
      <Typography>custom tooltip content</Typography>
      <Typography>it can be any react component</Typography>
    </div>
  );
};

CustomContent.args = {
  triggerBy: 'hover',
  position: 'right',
  content: <TooltipCustomContent />,
};

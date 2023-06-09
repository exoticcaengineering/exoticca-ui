import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDefault } from 'src/themes/theme';
import { Box } from '../Box';

const { colors, boxShadow } = themeDefault;

const borderStyles = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'inset',
  'ridge',
  'outset',
  'initial',
  'inherit',
];

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    borderColor: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    background: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    boxShadow: {
      options: Object.keys(boxShadow),
      control: { type: 'select' },
    },
    borderStyle: {
      options: borderStyles,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>Box component works as a container</Box>
);

export const Base = Template.bind({});

Base.args = {
  testId: 'basic-box',
};

export const WithBorder = Template.bind({});

WithBorder.args = {
  borderColor: 'promotion',
  borderWidth: 1,
};

export const WithBorderTop = Template.bind({});

WithBorderTop.args = {
  borderRadius: 'none',
  borderColor: 'promotion',
  borderWidth: [2, 0, 0, 0],
};

export const WithBorderBottom = Template.bind({});

WithBorderBottom.args = {
  borderRadius: 'none',
  borderColor: 'promotion',
  borderWidth: [0, 0, 2, 0],
};

export const WithBorderLeft = Template.bind({});

WithBorderLeft.args = {
  borderRadius: 'none',
  borderColor: 'promotion',
  borderWidth: [0, 0, 0, 2],
  padding: [1],
};

export const WithPadding = Template.bind({});

WithPadding.args = {
  borderColor: 'promotion',
  padding: [1, 2],
};

export const WithBackground = Template.bind({});

WithBackground.args = {
  background: 'promotion',
};

export const WithBoxShadow = Template.bind({});

WithBoxShadow.args = {
  boxShadow: 's',
};

export const WithRadius = Template.bind({});

WithRadius.args = {
  borderRadius: 'l',
  background: 'promotion',
};

export const WithDifferentRadius = Template.bind({});

WithDifferentRadius.args = {
  borderRadius: ['s', 'm', 'l', 'xl'],
  background: 'promotion',
};

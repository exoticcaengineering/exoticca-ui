import { Meta, StoryObj } from '@storybook/react';
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
  args: {
    testId: 'basic-box',
    children: 'Box component works as a container',
    onClick: undefined,
  },
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
} as Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const Base: Story = {};

export const WithBorder: Story = {
  args: {
    borderColor: 'promotion',
    borderWidth: 1,
  },
};

export const WithBorderTop: Story = {
  args: {
    borderRadius: 'none',
    borderColor: 'promotion',
    borderWidth: [2, 0, 0, 0],
  },
};

export const WithBorderBottom: Story = {
  args: {
    borderRadius: 'none',
    borderColor: 'promotion',
    borderWidth: [0, 0, 2, 0],
  },
};

export const WithBorderLeft: Story = {
  args: {
    borderRadius: 'none',
    borderColor: 'promotion',
    borderWidth: [0, 0, 0, 2],
    padding: [1],
  },
};

export const WithPadding: Story = {
  args: {
    borderColor: 'promotion',
    padding: [1, 2],
  },
};

export const WithBackground: Story = {
  args: {
    background: 'promotion',
  },
};

export const WithBoxShadow: Story = {
  args: {
    boxShadow: 's',
  },
};

export const WithRadius: Story = {
  args: {
    borderRadius: 'l',
    background: 'promotion',
  },
};

export const WithDifferentRadius: Story = {
  args: {
    borderRadius: ['s', 'm', 'l', 'xl'],
    background: 'promotion',
  },
};

export const Clickable: Story = {
  args: {
    borderColor: 'promotion',
    padding: [1, 2],
    onClick: () => alert('Clicked'),
  },
};

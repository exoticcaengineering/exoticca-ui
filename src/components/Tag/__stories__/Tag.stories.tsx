import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Contained: Story = {
  args: {
    text: 'Contained',
    textColor: 'polarNight',
    size: 'small',
    color: 'silentSavana',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    text: 'Outlined',
    textColor: 'polarNight',
    size: 'small',
    color: 'savageForest',
    variant: 'outlined',
  },
};

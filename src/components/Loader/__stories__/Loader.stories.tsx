import { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  args: {},
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'promotion', 'background'],
      control: { type: 'select' },
      category: 'Prop',
    },
    colorShade: {
      options: ['main', 'light', 'medium', 'contrast'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Base: Story = {
  args: {
    color: 'background',
    colorShade: 'medium',
  },
};

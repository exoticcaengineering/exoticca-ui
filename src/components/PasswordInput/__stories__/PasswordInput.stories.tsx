import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../PasswordInput';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  args: {},
} as Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Base: Story = {
  args: {
    defaultValue: 'password',
  },
};

export const DefaultShowPassword: Story = {
  args: {
    defaultShowPassword: true,
    defaultValue: 'password',
  },
};

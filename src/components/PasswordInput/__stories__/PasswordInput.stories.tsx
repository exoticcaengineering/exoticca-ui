import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  args: {},
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Base: Story = {
  args: {
    defaultValue: 'password',
    label: 'password',
  },
};

export const DefaultShowPassword: Story = {
  args: {
    defaultShowPassword: true,
    defaultValue: 'password',
  },
};

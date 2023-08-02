import { StoryObj, Meta } from '@storybook/react';

import { SelectableBox } from '../SelectableBox';

export default {
  title: 'Components/SelectableBox',
  component: SelectableBox,
  args: {
    children: 'SelectableBox',
  },
} as Meta<typeof SelectableBox>;

type Story = StoryObj<typeof SelectableBox>;

export const Base: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    isSelected: true,
  },
};

import { StoryObj, Meta } from '@storybook/react';
import { themeDefault } from 'src/themes/theme';
import { ProgressBar } from '../ProgressBar';

const { colors } = themeDefault;

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    backgroundColor: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    progressColor: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
  },
} as Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Base: Story = {
  args: {
    backgroundColorShade: 'light',
  },
};

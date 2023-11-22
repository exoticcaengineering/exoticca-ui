import { StoryObj, Meta } from '@storybook/react';
import { themeDefault } from 'src/themes/theme';
import { ProgressBar } from '../ProgressBar';

const { colors } = themeDefault;

const meta: Meta<typeof ProgressBar> = {
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
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Base: Story = {
  args: {
    backgroundColorShade: 'light',
  },
};

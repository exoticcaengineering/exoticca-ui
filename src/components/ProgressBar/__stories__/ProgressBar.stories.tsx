import { StoryObj, Meta } from '@storybook/react';
import { themeDefault } from 'src/themes/theme';
import { ProgressBar } from '../ProgressBar';

const { colors } = themeDefault;

const Meta: Meta<typeof ProgressBar> = {
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

export default Meta;

type Story = StoryObj<typeof ProgressBar>;

export const Base: Story = {
  args: {
    backgroundColorShade: 'light',
  },
};

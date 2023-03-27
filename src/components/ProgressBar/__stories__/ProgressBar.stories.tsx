import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof ProgressBar>;

const Tempalte: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Base = Tempalte.bind({});

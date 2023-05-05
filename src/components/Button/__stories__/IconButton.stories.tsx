import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: [
        'black',
        'white',
        'promoOrange',
        'promoGreen',
        'promoYellow',
        'promoBlue',
      ],
      control: { type: 'select' },
      category: 'Prop',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      category: 'Prop',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      category: 'Prop',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Base = Template.bind({});
Base.args = {
  icon: {
    icon: 'close',
  },
};

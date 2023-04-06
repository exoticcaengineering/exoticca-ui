import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from '../Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (props) => <Tag {...props} />;

export const Contained = Template.bind({});
Contained.args = {
  text: 'Contained',
  textColor: 'polarNight',
  size: 'small',
  color: 'silentSavana',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined',
  textColor: 'polarNight',
  size: 'small',
  color: 'savageForest',
  variant: 'outlined',
};

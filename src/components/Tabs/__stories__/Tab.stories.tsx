import { Meta, Story } from '@storybook/react';
import { Tab } from '../Tab';
import { ComponentProps } from 'react';

type CustomTabProps = ComponentProps<typeof Tab> & { text: string };

export default {
  title: 'Components/Tabs/Tab',
  component: Tab,
  argTypes: {
    title: {
      control: 'text',
    },
  },
} as Meta<CustomTabProps>;

const Template: Story<CustomTabProps> = ({ ...args }) => <Tab {...args} />;
export const Base = Template.bind({});

Base.args = {
  isSelected: true,
  title: 'Tab Item',
};

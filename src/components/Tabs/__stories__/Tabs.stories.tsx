import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';
import { Tabs } from '../Tabs';
import { Box } from 'src/components/Box';
import { useState } from 'react';

import { Tab } from '../Tabs.types';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const TABS: Tab[] = [
  { title: 'Item 1', id: '1', content: <div>content 1</div> },
  { title: 'Item 2', id: '2', content: <div>content 2</div> },
  { title: 'Item 3', id: '3', content: <div>content 3</div> },
  { title: 'Item 4', id: '4', content: <div>content 4</div> },
];

const Template: ComponentStory<typeof Tabs> = () => <Tabs tabs={TABS} />;
export const Base = Template.bind({});

import { Meta, Story } from '@storybook/react';
import { Tabs } from '../Tabs';
import { Box } from 'src/components/Box';
import { useState } from 'react';
import { Typography } from 'src/components/Typography';
import { Tab } from '../Tab/Tab';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const TABS = [
    { text: 'Item 1', id: '1' },
    { text: 'Item 2', id: '2' },
    { text: 'Item 3', id: '3' },
    { text: 'Item 4', id: '4' },
  ];

  const handleTabClick = (id: string) => {
    setSelectedTab(id);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          margin: '5rem',
        }}
      >
        <Box padding={[1]} borderRadius={'xl'}>
          <Tabs>
            {TABS.map(({ text, id }) => (
              <Tab
                key={id}
                isSelected={selectedTab === id}
                onClick={() => handleTabClick(id)}
              >
                <Typography key={id}>{text}</Typography>
              </Tab>
            ))}
          </Tabs>
        </Box>
      </div>
    </div>
  );
};
export const Base = Template.bind({});
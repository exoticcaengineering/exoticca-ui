import { Meta, Story } from '@storybook/react';
import { Tab } from '../Tab';
import { Box } from 'src/components/Box';
import { ComponentProps, useState } from 'react';
import { Typography } from 'src/components/Typography';

type CustomTabProps = ComponentProps<typeof Tab> & { text: string };

export default {
  title: 'Components/Tabs/Tab',
  component: Tab,
  args: { text: 'Item 1', isSelected: true },
  argTypes: {
    text: {
      control: 'text',
    },
    isSelected: {},
  },
} as Meta<CustomTabProps>;

const Template: Story<CustomTabProps> = ({ ...props }: CustomTabProps) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);

  const TABS = { text: props.text, id: '1' };
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
          <Tab
            isSelected={isSelected}
            onClick={() => setIsSelected(!isSelected)}
          >
            <Typography>{TABS.text}</Typography>
          </Tab>
        </Box>
      </div>
    </div>
  );
};
export const Base = Template.bind({});

import { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../Tab';
import { Box } from 'src/components/Box';
import { ComponentProps, useState } from 'react';
import { Typography } from 'src/components/Typography';

type CustomTabProps = ComponentProps<typeof Tab>;

const meta: Meta<typeof Tab> = {
  title: 'Components/Tabs/Tab',
  component: Tab,
  args: { children: 'Item 1', isSelected: true },
  argTypes: {
    children: {
      control: 'text',
    },
    isSelected: {},
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

const Template = ({ children, ...props }: CustomTabProps) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);

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
            <Typography>{children}</Typography>
          </Tab>
        </Box>
      </div>
    </div>
  );
};

export const Base: Story = {
  render: (args) => <Template {...args} />,
};

import { Meta, StoryObj } from '@storybook/react';
import { Item } from '../Item';
import { Box } from 'src/components/Box';
import { ComponentProps } from 'react';
import { ArrowIcon } from 'src/components/SvgIcons/Arrow';

type CustomItemProps = ComponentProps<typeof Item>;

const meta: Meta<typeof Item> = {
  title: 'Components/Item',
  component: Item,
  args: {
    children: 'Selectable Item',
    hover: 'background',
  },
  argTypes: {
    selected: {
      control: { type: 'radio' },
      options: [true, false],
    },
    hover: {
      options: ['background', 'underlined', 'underlined-bold'],
      control: { type: 'select' },
      category: 'Prop',
    },
    children: {
      table: {
        category: 'Text',
        control: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

const Template = ({ children = 'itemText', ...props }: CustomItemProps) => (
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
      <Box boxShadow="s" padding={[1]} borderRadius={'xl'}>
        <Item {...props}>
          <a>{children}</a>
        </Item>
      </Box>
    </div>
  </div>
);

export const Base: Story = {
  render: (args) => <Template {...args} />,
};

export const WithStartIcon: Story = {
  args: {
    startIcon: <ArrowIcon />,
  },
  render: (args) => <Template {...args} />,
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <ArrowIcon />,
  },
  render: (args) => <Template {...args} />,
};

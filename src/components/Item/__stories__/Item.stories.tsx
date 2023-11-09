import { Meta, StoryObj } from '@storybook/react';
import { Item } from '../Item';
import { Box } from 'src/components/Box';
import { ComponentProps } from 'react';

type CustomItemProps = ComponentProps<typeof Item> & { itemText?: string };

const Meta: Meta<typeof Item> = {
  title: 'Components/Item',
  component: Item,
  args: {
    itemText: 'Selectable Item',
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
    itemText: {
      table: {
        category: 'Text',
        control: 'text',
      },
    },
  },
};

export default Meta;
type Story = StoryObj<typeof Item>;

const Template = ({ itemText = 'itemText', ...props }: CustomItemProps) => (
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
          <a>{itemText}</a>
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
    startIcon: { icon: 'arrow' },
  },
  render: (args) => <Template {...args} />,
};

export const WithEndIcon: Story = {
  args: {
    endIcon: { icon: 'arrow' },
  },
  render: (args) => <Template {...args} />,
};

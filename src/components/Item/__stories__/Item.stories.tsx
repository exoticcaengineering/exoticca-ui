import { Meta, Story } from '@storybook/react';
import { Item } from '../Item';
import { Box } from 'src/components/Box';
import { ComponentProps } from 'react';

type CustomItemProps = ComponentProps<typeof Item> & { itemText: string };

export default {
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
} as Meta<CustomItemProps>;

const Template: Story<CustomItemProps> = ({
  itemText,
  ...props
}: CustomItemProps) => (
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
export const Base = Template.bind({});

export const withStartIcon = Template.bind({});

withStartIcon.args = {
  startIcon: { icon: 'arrowUp' },
};

export const withEndIcon = Template.bind({});
withEndIcon.args = {
  endIcon: { icon: 'arrowUp' },
};

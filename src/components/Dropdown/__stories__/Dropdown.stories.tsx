import { Meta, StoryObj } from '@storybook/react';
import { menuItems } from './mockData';
import { Dropdown } from '../Dropdown';
import { DropdownList } from './DropdownList';
import { Props } from '../Dropdown.types';

export default {
  title: 'components/Dropdown',
  component: Dropdown,
  argTypes: {
    position: {
      options: ['right', 'left'],
      control: { type: 'select' },
      category: 'Prop',
    },
    withCloseButton: {
      category: 'Prop',
    },
    isCloseDropdown: {
      category: 'Prop',
    },
    itemText: {
      table: {
        category: 'Text',
        control: 'text',
      },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    inverseStyle: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const Template = (args: Props) => (
  <div
    style={{
      width: '100%',
      height: '90vh',
      backgroundColor: '#DCDCDC',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        marginTop: '5rem',
        background: 'lightblue',
      }}
    >
      <Dropdown
        {...args}
        startIcon={{ icon: 'flag-uk' }}
        text="dropdown button"
        dropdownList={(props) => (
          <DropdownList
            {...props}
            position={args.position ?? 'left'}
            subMenuItems={menuItems[0][0].items}
            inverseStyle={args.inverseStyle}
          />
        )}
      />
    </div>
  </div>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

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
        text="dropdown button"
        textColor="secondary"
        {...args}
        startIcon={{ icon: 'flag-uk' }}
        dropdownList={(props) => (
          <DropdownList
            {...props}
            position={args.position ?? 'left'}
            subMenuItems={menuItems[0][0].items}
          />
        )}
        css={{ maxWidth: '250px' }}
      />
    </div>
  </div>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const DefaultOpen: Story = {
  args: {
    isDefaultOpen: true,
  },
  render: (args) => <Template {...args} />,
};

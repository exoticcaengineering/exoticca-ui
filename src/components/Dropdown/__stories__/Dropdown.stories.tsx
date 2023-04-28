import { ComponentMeta, ComponentStory } from '@storybook/react';
import { menuItems } from './mockData';
import { Dropdown } from '../Dropdown';
import { DropdownList } from './DropdownList';

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
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
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
        text="dropdown button"
        dropdownList={(props) => (
          <DropdownList
            {...props}
            position={args.position ?? 'left'}
            subMenuItems={menuItems[0][0].items}
          />
        )}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  position: 'right',
  withCloseButton: false,
  startIcon: { icon: 'flag-us', originalIconColor: true },
};

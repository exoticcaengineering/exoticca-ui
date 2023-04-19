import { ComponentMeta, Story } from '@storybook/react';
import { menuItems } from './mockData';
import { Dropdown } from '../Dropdown';
import { MenuPropsType } from '../Dropdown.types';
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
} as ComponentMeta<typeof Dropdown>;

const Template: Story<MenuPropsType> = (args) => (
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
      <Dropdown {...args} buttonText="dropdown button">
        <DropdownList
          position={args.position}
          subMenuItems={menuItems[0][0].items}
        />
      </Dropdown>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: menuItems,
  position: 'right',
  withCloseButton: false,
};

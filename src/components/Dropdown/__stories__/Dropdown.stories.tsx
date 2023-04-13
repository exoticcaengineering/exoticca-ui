import { Meta, Story } from '@storybook/react';
import { menuItems } from './mockData';
import { Dropdown } from '../Dropdown';
import { MenuPropsType } from '../Dropdown.types';
import { DropdownList } from './DropdownList';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

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
      }}
    >
      <Dropdown {...args}>
        <DropdownList subMenuItems={menuItems[0][0].items} />
      </Dropdown>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: menuItems,
};

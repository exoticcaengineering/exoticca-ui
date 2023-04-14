import { Meta, Story } from '@storybook/react';
import { Button } from '../Button';
import { ComponentProps } from 'react';

type CustomItemProps = ComponentProps<typeof Button> & { itemText: string };

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'Pepito',
    size: 'normal',
    color: 'black',
    shape: 'rounded',
  },
  argTypes: {},
} as Meta<CustomItemProps>;

const Template: Story<CustomItemProps> = ({ ...props }: CustomItemProps) => (
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
        width: '15rem',
      }}
    >
      <Button {...props} />
    </div>
  </div>
);
export const Base = Template.bind({});

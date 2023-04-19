import { Meta, Story } from '@storybook/react';
import { Input } from '../Input';
import { useState } from 'react';
import { iconNames } from 'src/types/IconNames';
import { InputProps } from '../Input.types';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    icon: 'user',
    label: 'Label',
    placeholder: 'Placeholder',
    rounded: 'both',
  },
  argTypes: {
    icon: {
      options: [...iconNames, ''],
      control: { type: 'select' },
      category: 'Prop',
    },
    rounded: {
      options: ['right', 'left', 'both'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
} as Meta<InputProps>;

const Template: Story<InputProps> = ({ ...props }) => {
  const [value, setValue] = useState('');

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
          width: '15rem',
        }}
      >
        <Input {...props} value={value} setValue={setValue} />
      </div>
    </div>
  );
};
export const Base = Template.bind({});

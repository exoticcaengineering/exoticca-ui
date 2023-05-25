import { ComponentStory, Meta } from '@storybook/react';
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
      options: [...iconNames, 'user'],
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

const Template: ComponentStory<typeof Input> = ({ ...props }) => {
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

export const LeftRounded = Template.bind({});

LeftRounded.args = {
  rounded: 'left',
};

export const RightRounded = Template.bind({});

RightRounded.args = {
  rounded: 'right',
};

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
  icon: undefined,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  readOnly: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

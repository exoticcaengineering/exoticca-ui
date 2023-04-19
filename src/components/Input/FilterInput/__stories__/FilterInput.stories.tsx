import { Meta, Story } from '@storybook/react';
import { FilterInput } from '../FilterInput';
import { iconNames } from 'src/types/IconNames';
import { useState } from 'react';

export default {
  title: 'Components/Input/FilterInput',
  component: FilterInput,
  args: {
    icon: 'arrow',
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

const Template: Story<InputProps> = ({ icon, label, placeholder, rounded }) => {
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
        <FilterInput
          icon={icon}
          label={label}
          placeholder={placeholder}
          rounded={rounded}
          setValue={setValue}
          value={value}
        >
          <div style={{ height: '5rem' }} />
        </FilterInput>
      </div>
    </div>
  );
};
export const Base = Template.bind({});

import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { UploadInput } from '../UploadInput';
import { useState } from 'react';
import { iconNames } from 'src/types/IconNames';
// import { InputProps } from '../UploadInput.types';

export default {
  title: 'Components/UploadInput',
  component: UploadInput,
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
} as Meta<any>;

type Story = StoryObj<any>;

const Template: ComponentStory<typeof UploadInput> = ({ ...props }) => {
  const [value, setValue] = useState(['']);

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
          width: '100%',
          // margin: '0 auto',
        }}
      >
        <UploadInput {...props} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export const Base: Story = {
  render: (args) => <Template {...args} />,
};

// export const LeftRounded: Story = {
//   render: (args) => <Template {...args} rounded="left" />,
// };

// export const RightRounded: Story = {
//   render: (args) => <Template {...args} rounded="right" />,
// };

// export const WithoutIcon: Story = {
//   render: (args) => <Template {...args} icon={undefined} />,
// };

// export const ReadOnly: Story = {
//   render: (args) => <Template {...args} readOnly />,
// };

// export const Disabled: Story = {
//   render: (args) => <Template {...args} disabled />,
// };

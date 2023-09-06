import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { UploadInput } from '../UploadInput';
import { useState } from 'react';
import { uploadInputProps } from '../UploadInput.types';
// import { InputProps } from '../UploadInput.types';

export default {
  title: 'Components/UploadInput',
  component: UploadInput,
  args: {
    value: [],
    setValue: () => null,
  },
} as Meta<uploadInputProps>;

type Story = StoryObj<uploadInputProps>;

const Template: ComponentStory<typeof UploadInput> = ({ ...props }) => {
  const [value, setValue] = useState<File[]>([]);
  const mockedChangeFieldHandler = (field: string, newValue: File[]) => {
    return setValue(newValue);
  };

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
        <UploadInput
          {...props}
          value={value}
          setValue={mockedChangeFieldHandler}
        />
      </div>
    </div>
  );
};

export const Base: Story = {
  render: (args) => <Template {...args} />,
};

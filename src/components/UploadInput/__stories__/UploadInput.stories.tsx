import { Meta, StoryObj } from '@storybook/react';
import { UploadInput } from '../UploadInput';
import { useState } from 'react';
import { uploadInputProps } from '../UploadInput.types';

const meta: Meta<typeof UploadInput> = {
  title: 'Components/UploadInput',
  component: UploadInput,
  args: {
    value: [],
    setValue: () => null,
  },
};

export default meta;

type Story = StoryObj<typeof UploadInput>;

const Template = ({ ...props }: uploadInputProps) => {
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

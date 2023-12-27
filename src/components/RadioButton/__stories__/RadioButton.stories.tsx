import { StoryObj, Meta } from '@storybook/react';
import { RadioButton } from '../RadioButton';
import EnvelopeIcon from 'src/components/SvgIcons/Envelope';
import { Flex } from 'src/components/Flex';
import { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  args: {
    label: 'Radio Button',
    testId: 'radio-button',
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Base: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: <EnvelopeIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <EnvelopeIcon />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const radioButtonIds = ['1', '2', '3'];
const RadioButtonGroup = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    setSelectedId(id);
  };
  return (
    <Flex gap={1} direction="column">
      {radioButtonIds.map((id) => (
        <RadioButton
          key={id}
          label={`Radio Button ${id}`}
          onChange={(e) => handleOnChange(e, id)}
          checked={selectedId === id}
        />
      ))}
    </Flex>
  );
};

export const Group: Story = {
  render: () => <RadioButtonGroup />,
};

import { StoryObj, Meta } from '@storybook/react';
import { RadioButton } from '../RadioButton';
import EnvelopeIcon from 'src/components/SvgIcons/Envelope';

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

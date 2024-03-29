import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';
import { Props } from '../Input.types';
import { ContactIcon } from 'src/components/SvgIcons/Contact';
import { UserIcon } from 'src/components/SvgIcons/User';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    rounded: 'both',
  },
  argTypes: {
    rounded: {
      options: ['right', 'left', 'both'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const Template = ({ ...props }: Props) => {
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
        <Input {...props} />
      </div>
    </div>
  );
};

export const Base: Story = {
  render: (args) => <Template {...args} />,
};

export const LabelInside: Story = {
  render: (args) => <Template {...args} labelPosition="inside" />,
};

export const LeftRounded: Story = {
  render: (args) => <Template {...args} rounded="left" />,
};

export const RightRounded: Story = {
  render: (args) => <Template {...args} rounded="right" />,
};

export const WithStartIcon: Story = {
  args: {
    startIcon: <UserIcon />,
  },
  render: (args) => <Template {...args} />,
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <ContactIcon />,
  },
  render: (args) => <Template {...args} />,
};

export const ReadOnly: Story = {
  render: (args) => <Template {...args} readOnly />,
};

export const Disabled: Story = {
  render: (args) => <Template {...args} disabled />,
};

export const Error: Story = {
  render: (args) => <Template {...args} errorMessage="Error message" />,
};

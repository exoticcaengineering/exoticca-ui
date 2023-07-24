import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';
import { Props } from '../Input.types';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    startIcon: {
      icon: 'user',
    },
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
} as Meta<Props>;

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof Input> = ({ ...props }) => {
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

export const WithoutIcon: Story = {
  render: (args) => <Template {...args} />,
};

export const ReadOnly: Story = {
  render: (args) => <Template {...args} readOnly />,
};

export const Disabled: Story = {
  render: (args) => <Template {...args} disabled />,
};

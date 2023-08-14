import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Alert } from 'src/components/Alert';
import { Props } from 'src/components/Alert/Alert.types';

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    testId: 'alert',
    text: 'This is an alert ',
    padding: [1, 2],
    borderWidth: 1,
    borderColor: 'success',
    borderRadius: 'm',
    startIcon: {
      icon: 'info',
      size: 'medium',
      stroke: 'currentColor',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof Alert> = ({ ...props }) => {
  return <Alert {...props} />;
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
};

export const Error: Story = {
  render: (args) => (
    <Template
      {...args}
      borderWidth={2}
      borderColor="warning"
      startIcon={{
        icon: 'alert-triangle',
        fill: 'currentColor',
        stroke: 'currentColor',
      }}
    />
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <Template
      {...args}
      fontSize="body2"
      borderRadius={'xl'}
      startIcon={{
        icon: 'alert-triangle',
        fill: 'currentColor',
        stroke: 'currentColor',
      }}
    />
  ),
};

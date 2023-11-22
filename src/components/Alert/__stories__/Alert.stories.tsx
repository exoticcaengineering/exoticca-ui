import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Alert } from 'src/components/Alert';
import { Props } from 'src/components/Alert/Alert.types';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    testId: 'alert',
    title: 'Alert title',
    text: 'This is an alert ',
    status: 'info',
  },
};

export default meta;

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof Alert> = ({ ...props }) => {
  return <Alert {...props} />;
};

export const Info: Story = {
  render: (args) => <Template {...args} status="info" />,
};

export const Success: Story = {
  render: (args) => <Template {...args} status="success" />,
};

export const Warning: Story = {
  render: (args) => <Template {...args} status="warning" />,
};

export const Rounded: Story = {
  render: (args) => <Template {...args} title={undefined} rounded />,
};

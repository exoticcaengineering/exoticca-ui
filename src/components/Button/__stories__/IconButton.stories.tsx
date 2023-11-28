import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../IconButton';
import { IconButtonProps } from '../Button.types';
import { StyledRowWrapper } from './Story.styles';
import { CloseIcon } from 'icons/SvgIcons/Close';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'promotion'],
      control: { type: 'select' },
      category: 'Prop',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      category: 'Prop',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      category: 'Prop',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
  },
} as Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

const PrimaryIconButton = (props: IconButtonProps) => (
  <IconButton {...props} icon={<CloseIcon />} variant="primary" />
);

const SecondaryIconButton = (props: IconButtonProps) => (
  <IconButton {...props} icon={<CloseIcon />} variant="secondary" />
);

const TertiaryIconButton = (props: IconButtonProps) => (
  <IconButton {...props} icon={<CloseIcon />} variant="tertiary" />
);

const IconButtonVariants = (props: IconButtonProps) => (
  <StyledRowWrapper>
    <PrimaryIconButton {...props} />
    <SecondaryIconButton {...props} />
    <TertiaryIconButton {...props} />
  </StyledRowWrapper>
);

export const Variants: Story = {
  render: (args) => <IconButtonVariants {...args} />,
};

export const Primary: Story = {
  render: (args) => <PrimaryIconButton {...args} />,
};

export const Secondary: Story = {
  render: (args) => <SecondaryIconButton {...args} />,
};

export const Tertiary: Story = {
  render: (args) => <TertiaryIconButton {...args} />,
};

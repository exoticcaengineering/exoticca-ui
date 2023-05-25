import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Props } from '../Button.types';
import { StyledWrapper } from './Story.styles';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'I am a button',
    size: 'medium',
    color: 'black',
    shape: 'rounded',
    state: 'default',
    variant: 'primary',
  },
  argTypes: {
    color: {
      options: [
        'black',
        'white',
        'promoOrange',
        'promoGreen',
        'promoYellow',
        'promoBlue',
      ],
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
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
    shape: {
      options: ['square', 'rounded'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
} as Meta<typeof Button>;

type StoryType = StoryObj<typeof Button>;

const ButtonVariations = (props: Props) => {
  return (
    <StyledWrapper>
      <Button {...props} variant="primary" text="primary button" />
      <Button {...props} variant="secondary" text="secondary button" />
      <Button {...props} variant="tertiary" text="tertiary button" />
    </StyledWrapper>
  );
};

const ButtonSizes = (props: Props) => {
  return (
    <StyledWrapper>
      <Button {...props} size="small" text="small button" />
      <Button {...props} size="medium" text="medium button" />
      <Button {...props} size="large" text="large button" />
    </StyledWrapper>
  );
};

const ButtonShapes = (props: Props) => {
  return (
    <StyledWrapper>
      <Button {...props} shape="square" text="square button" />
      <Button {...props} shape="rounded" text="rounded button" />
    </StyledWrapper>
  );
};

const ButtonWithIcon = (props: Props) => {
  return (
    <StyledWrapper>
      <Button {...props} startIcon={{ icon: 'calendar' }} text="start icon" />
      <Button
        {...props}
        startIcon={{ icon: 'calendar' }}
        text="start icon loading"
        isLoading
      />
      <Button {...props} endIcon={{ icon: 'calendar' }} text=" end icon" />
      <Button
        {...props}
        endIcon={{ icon: 'calendar' }}
        text="end icon loading"
        isLoading
      />
    </StyledWrapper>
  );
};

const ButtonStates = (props: Props) => {
  return (
    <StyledWrapper>
      <Button {...props} isLoading text="button loading" />
      <Button
        {...props}
        isDisabled
        variant="primary"
        text="primary button disabled"
      />
      <Button
        {...props}
        isDisabled
        variant="secondary"
        text="secondary button disabled"
      />
      <Button
        {...props}
        isDisabled
        variant="tertiary"
        text="tertiary button disabled"
      />
    </StyledWrapper>
  );
};

export const Variations: StoryType = {
  render: ButtonVariations,
};

export const Sizes: StoryType = {
  render: ButtonSizes,
};

export const Shapes: StoryType = {
  render: ButtonShapes,
};

export const WithIconAndLoading: StoryType = {
  render: ButtonWithIcon,
};

export const States: StoryType = {
  render: ButtonStates,
};

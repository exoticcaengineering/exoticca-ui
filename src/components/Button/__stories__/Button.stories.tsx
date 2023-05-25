import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Props } from '../Button.types';
import { StyledColumnWrapper, StyledRowWrapper } from './Story.styles';

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
    <StyledRowWrapper>
      <Button {...props} variant="primary" text="primary button" />
      <Button {...props} variant="secondary" text="secondary button" />
      <Button {...props} variant="tertiary" text="tertiary button" />
    </StyledRowWrapper>
  );
};

const ButtonSizes = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Button {...props} size="small" text="small button" />
      <Button {...props} size="medium" text="medium button" />
      <Button {...props} size="large" text="large button" />
    </StyledRowWrapper>
  );
};

const ButtonShapes = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Button {...props} shape="square" text="square button" />
      <Button {...props} shape="rounded" text="rounded button" />
    </StyledRowWrapper>
  );
};

const ButtonWithIcon = (props: Props) => {
  return (
    <StyledColumnWrapper>
      <StyledRowWrapper>
        <Button {...props} startIcon={{ icon: 'calendar' }} text="start icon" />
        <Button
          {...props}
          startIcon={{ icon: 'calendar' }}
          text="start icon loading"
          isLoading
        />
      </StyledRowWrapper>

      <StyledRowWrapper>
        <Button {...props} endIcon={{ icon: 'calendar' }} text=" end icon" />
        <Button
          {...props}
          endIcon={{ icon: 'calendar' }}
          text="end icon loading"
          isLoading
        />
      </StyledRowWrapper>
    </StyledColumnWrapper>
  );
};

const ButtonStates = (props: Props) => {
  return (
    <StyledColumnWrapper>
      <StyledRowWrapper>
        <Button {...props} isLoading text="button loading" />
      </StyledRowWrapper>
      <StyledRowWrapper>
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
      </StyledRowWrapper>
    </StyledColumnWrapper>
  );
};

/**
 *
 * There are 3 variations of buttons: primary, secondary and tertiary.
 */
export const Variations: StoryType = {
  render: ButtonVariations,
};

/**
 *
 * There are 3 button sizes of buttons: small, medium and large.
 */
export const Sizes: StoryType = {
  render: ButtonSizes,
};

/**
 *
 * There are 2 button shapes of buttons: square and rounded.
 */
export const Shapes: StoryType = {
  render: ButtonShapes,
};

/**
 *
 * Button can have a start icon or an end icon.
 * When the button is loading, the icon is replaced by a spinner.
 */
export const WithIconAndLoading: StoryType = {
  render: ButtonWithIcon,
};

/**
 *
 * There are 2 states of buttons: loading and disabled.
 */
export const States: StoryType = {
  render: ButtonStates,
};

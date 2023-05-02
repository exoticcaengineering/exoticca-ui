import { MouseEventHandler } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonColor =
  | 'black'
  | 'white'
  | 'promoBlue'
  | 'promoGreen'
  | 'promoYellow'
  | 'promoOrange';
export interface Props extends ComponentPropsBase {
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  shape?: 'square' | 'rounded';
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  centerIcon?: IconConfig;
  onClick?: MouseEventHandler | undefined;
  fullWidth?: boolean;
}

export interface StyledProps extends Props {}

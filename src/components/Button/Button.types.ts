import { MouseEventHandler } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';

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
  state?: 'normal' | 'disabled' | 'loading';
  variant?: 'primary' | 'secondary' | 'tertiary';
  leftIcon?: IconName;
  rightIcon?: IconName;
  centerIcon?: IconName;
  onClick: MouseEventHandler | undefined;
}

export interface StyledProps extends Props {}

import { MouseEventHandler } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';

export interface Props extends ComponentPropsBase {
  text?: string;
  size: 'small' | 'medium' | 'large';
  color:
    | 'black'
    | 'white'
    | 'promoBlue'
    | 'promoGreen'
    | 'promoYellow'
    | 'promoOrange';
  shape: 'square' | 'rounded';
  state?: 'normal' | 'disabled' | 'loading';
  variant: 'primary' | 'secondary' | 'tertiary';
  leftIcon?: IconName | '';
  rightIcon?: IconName | '';
  centerIcon?: IconName | '';
  onClick: MouseEventHandler | undefined;
}

export interface StyledProps extends Props {}

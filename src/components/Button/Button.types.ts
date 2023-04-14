import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBase {
  text?: string;
  size?: 'small' | 'normal' | 'large';
  color?: 'black' | 'white' | 'promoRed' | 'promoGreen' | 'promoYellow';
  shape?: 'square' | 'rounded';
  variants?: 'outlined' | 'contained';
  leftIcon?: ChildNode;
  rightIcon?: ChildNode;
}

export interface StyledProps extends Props {}

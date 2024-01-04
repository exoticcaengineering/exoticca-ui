import { ColorShade, Palette } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type TagSize = 'small' | 'medium';
export type TagVariant = 'primary' | 'secondary' | 'outlined';

export interface Props extends ComponentPropsBase {
  size?: TagSize;
  text: string;
  variant?: TagVariant;
  color?: keyof Palette;
  shape?: 'square' | 'rounded';
  shade?: keyof ColorShade;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export interface StyledProps extends Omit<Props, 'text'> {}

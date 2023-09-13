import { ColorShade, Palette } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon/Icon.types';

export type TagSize = 'small'; // | 'medium' we may have more sizes in the future ;
export type TagVariant = 'primary' | 'secondary';

export interface Props extends ComponentPropsBase {
  size?: TagSize;
  text: string;
  variant?: TagVariant;
  color?: keyof Palette;
  shape?: 'square' | 'rounded';
  shade?: keyof ColorShade;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
}

export interface StyledProps extends Omit<Props, 'text'> {}

import { ColorShade, Palette } from 'src/types';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';
import * as CSS from 'csstype';

export type IconSize =
  | 'small' //12px
  | 'regular' // 18px
  | 'medium' //24px
  | 'large' // 40px
  | 'xLarge'; // 50px

export interface IconConfig {
  size?: IconSize;
  fill?: keyof Palette | 'currentColor';
  fillShade?: keyof ColorShade;
  stroke?: keyof Palette | 'currentColor';
  strokeShade?: keyof ColorShade;
  width?: CSS.Property.Width | number;
  height?: CSS.Property.Height | number;
  originalIconColor?: boolean;
  rotate?: number;
  onClick?: () => void;
}
export interface Props extends ComponentPropsBaseWithChildren, IconConfig {}

export interface StyledProps extends Omit<Props, 'onClick'> {
  isClickable?: boolean;
}

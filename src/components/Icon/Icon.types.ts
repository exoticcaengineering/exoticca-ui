import { Colors } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';
import * as CSS from 'csstype';

export type IconSize =
  | 'small' //12px
  | 'regular' // 18px
  | 'medium' //24px
  | 'large' // 40px
  | 'xLarge'; // 50px

export interface IconConfig {
  icon: IconName;
  size?: IconSize;
  fill?: keyof Colors;
  stroke?: keyof Colors;
  width?: CSS.Property.Width;
  height?: CSS.Property.Height;
  originalIconColor?: boolean;
  rotate?: number;
}
export interface Props extends ComponentPropsBase, IconConfig {
  onClick?: () => void;
}

export interface StyledProps extends Omit<Props, 'icon'> {}

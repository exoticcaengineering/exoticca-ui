import { Colors } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';

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
  fullWidth?: boolean;
  fullHeight?: boolean;
  autoWidth?: boolean;
  autoHeight?: boolean;
  width?: number | 'auto';
  height?: number | 'auto';
  originalIconColor?: boolean;
  rotate?: number;
}
export interface Props extends ComponentPropsBase, IconConfig {
  onClick?: () => void;
}

export interface StyledProps extends Omit<Props, 'icon'> {}

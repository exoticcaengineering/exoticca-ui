import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';

export type IconSize =
  | 'small' //12px
  | 'regular' // 18px
  | 'medium' //24px
  | 'large' // 40px
  | 'xLarge'; // 50px
export interface Props extends ComponentPropsBase {
  icon: IconName;
  size?: IconSize;
  fill?: string;
  stroke?: string;
}

export interface StyledProps extends Omit<Props, 'icon'> {}

import { Colors, Theme } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';
import { IconSize } from 'src/components/Icon/Icon.types';

type ItemColor = Extract<keyof Colors, 'arcticWind' | 'polarNight'>;

export interface ItemIconConfig {
  name: IconName;
  size?: IconSize;
  fill?: ItemColor;
  stroke?: ItemColor;
}

export interface Props extends ComponentPropsBase {
  hover?: 'underlined' | 'background' | 'underlined-bold';
  color?: ItemColor;
  selected?: boolean;
  startIcon?: ItemIconConfig;
  endIcon?: ItemIconConfig;
  onClick?: () => void;
}

export interface StyledProps
  extends Pick<Props, 'hover' | 'color' | 'selected'> {}

export interface SetColorParams extends Pick<Props, 'selected' | 'color'> {
  theme: Theme;
}

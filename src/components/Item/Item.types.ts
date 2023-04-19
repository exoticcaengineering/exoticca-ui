import { Colors, Theme } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';
import { IconSize, IconConfig } from 'src/components/Icon/Icon.types';

type ItemColor = Extract<keyof Colors, 'arcticWind' | 'polarNight'>;

export interface ItemIconConfig {
  name: IconName;
  size?: IconSize;
  fill?: ItemColor;
  stroke?: ItemColor;
}

export type ItemSize = 'xSmall' | 'small' | 'medium' | 'large';

export interface Props extends ComponentPropsBase {
  hover?: 'underlined' | 'background' | 'underlined-bold';
  color?: ItemColor;
  selected?: boolean;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  onClick?: () => void;
  size?: ItemSize;
}

export interface StyledProps
  extends Pick<Props, 'hover' | 'color' | 'selected' | 'size'> {}

export interface SetColorParams extends Pick<Props, 'selected' | 'color'> {
  theme: Theme;
}

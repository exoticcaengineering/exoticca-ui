import { Colors, Theme } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';
import { IconSize } from 'src/components/Icon/Icon.types';

type ItemColor = Extract<keyof Colors, 'arcticWind' | 'polarNight'>;

export interface Props extends ComponentPropsBase {
  hover?: 'underlined' | 'background' | 'underlined-bold';
  color?: ItemColor;
  selected?: boolean;
  startIcon?: IconName;
  endIcon?: IconName;
  iconSize?: IconSize;
  onClick?: () => void;
}

export interface StyledProps
  extends Pick<Props, 'hover' | 'color' | 'selected'> {}

export interface SetColorParams extends Pick<Props, 'selected' | 'color'> {
  theme: Theme;
}

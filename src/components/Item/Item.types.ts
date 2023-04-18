import { Colors, Theme } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

type ItemColor = Extract<keyof Colors, 'arcticWind' | 'polarNight'>;

export interface Props extends ComponentPropsBase {
  hover: 'underlined' | 'background' | 'underlined-bold';
  color?: ItemColor;
  selected?: boolean;
}

export interface StyledProps extends Props {}

export interface SetColorParams {
  selected?: boolean;
  theme: Theme;
  color: ItemColor;
}

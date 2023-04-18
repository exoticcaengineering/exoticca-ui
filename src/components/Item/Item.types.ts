import { Theme } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBase {
  hover: 'underlined' | 'background' | 'underlined-bold';
  color?: 'arcticWind' | 'polarNight';
  selected?: boolean;
}

export interface StyledProps extends Props {}

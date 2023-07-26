import { Palette } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconSize } from '../Icon';

type SpinnerSize = Extract<IconSize, 'regular' | 'medium' | 'large'>;

export interface Props extends ComponentPropsBase {
  customStyle?: object;
  size?: SpinnerSize;
  color?: keyof Palette | 'currentColor';
}

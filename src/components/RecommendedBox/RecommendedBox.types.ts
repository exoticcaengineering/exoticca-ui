import { ColorShade, Palette } from 'src/types';
import { BoxProps } from '../Box';

export interface Props
  extends Omit<BoxProps, 'borderColor' | 'borderColorShade'> {
  color?: keyof Palette;
  colorShade?: keyof ColorShade;
  recommendationText: string;
}

export interface StyledProps
  extends Pick<Partial<Props>, 'color' | 'colorShade'> {}

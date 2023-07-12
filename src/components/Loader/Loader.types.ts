import { Palette, ColorShade } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBase {
  color?: keyof Palette;
  colorShade?: keyof ColorShade;
}

export interface StyledProps extends Pick<Props, 'color' | 'colorShade'> {
  dotIndicator?: number;
}

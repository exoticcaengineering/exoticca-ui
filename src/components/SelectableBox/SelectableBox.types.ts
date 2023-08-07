import { ColorShade, Palette } from 'src/types';
import { BoxProps } from '../Box';

export interface Props extends BoxProps {
  isSelected?: boolean;
  highlightColor?: keyof Palette;
  highlightColorShade?: keyof ColorShade;
  highlightText?: string;
}

export interface StyledProps
  extends Pick<Partial<Props>, 'highlightColor' | 'highlightColorShade'> {}

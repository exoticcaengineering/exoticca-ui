import { ColorShade, Palette } from 'src/types';
import { Props as BoxProps } from 'src/components/Box/Box.types';

export interface Props extends BoxProps {
  isSelected?: boolean;
  highlightColor?: keyof Palette;
  highlightColorShade?: keyof ColorShade;
  highlightText?: string;
}

export interface StyledProps
  extends Pick<
    Partial<Props>,
    'highlightColor' | 'highlightColorShade' | 'isSelected'
  > {
  isClickable?: boolean;
}

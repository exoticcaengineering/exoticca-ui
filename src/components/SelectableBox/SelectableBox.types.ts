import { ColorShade, Palette } from 'src/types';
import { Props as BoxProps } from 'src/components/Box/Box.types';

interface HightLightConfig {
  highlightColor?: keyof Palette;
  highlightColorShade?: keyof ColorShade;
  highlightText?: string;
}
export interface Props extends BoxProps {
  isSelected?: boolean;
  highlightConfig?: HightLightConfig;
}

export interface StyledProps
  extends Pick<Partial<Props>, 'isSelected'>,
    Pick<HightLightConfig, 'highlightColor' | 'highlightColorShade'> {
  isClickable?: boolean;
}

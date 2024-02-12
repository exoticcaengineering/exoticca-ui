import { ColorShade, Palette } from 'src/types';
import { BoxProps } from 'src/components/Box/Box.types';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

interface HightLightConfig {
  highlightColor?: keyof Palette;
  highlightColorShade?: keyof ColorShade;
  highlightText?: string;
}
export interface Props extends ComponentPropsBaseWithChildren, BoxProps {
  isSelected?: boolean;
  highlightConfig?: HightLightConfig;
}

export interface StyledProps
  extends Pick<Partial<Props>, 'isSelected'>,
    Pick<HightLightConfig, 'highlightColor' | 'highlightColorShade'> {
  isClickable?: boolean;
}

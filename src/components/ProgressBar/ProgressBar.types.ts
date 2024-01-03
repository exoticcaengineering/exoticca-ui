import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { ColorShade, Palette } from 'src/types/theme';
import * as CSS from 'csstype';

export interface Props extends ComponentPropsBase {
  backgroundColor?: keyof Palette;
  backgroundColorShade?: keyof ColorShade;
  progressColor?: keyof Palette;
  progressColorShade?: keyof ColorShade;
  duration?: number;
  iterationCount?: CSS.Property.AnimationIterationCount;
  timingFunction?: CSS.Property.AnimationTimingFunction;
  fillMode?: CSS.Property.AnimationFillMode;
  value?: number;
  height?: number;
}

export interface StyledProps
  extends Pick<
    Partial<Props>,
    | 'backgroundColor'
    | 'backgroundColorShade'
    | 'progressColor'
    | 'progressColorShade'
    | 'duration'
    | 'iterationCount'
    | 'timingFunction'
    | 'fillMode'
    | 'value'
    | 'height'
  > {}

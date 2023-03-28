import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { Colors } from 'src/types/theme';
import * as CSS from 'csstype';

export interface Props extends ComponentPropsBase {
  backgroundColor?: keyof Colors;
  progressColor?: keyof Colors;
  duration?: number;
  iterationCount?: CSS.Property.AnimationIterationCount;
  timingFunction?: CSS.Property.AnimationTimingFunction;
  fillMode?: CSS.Property.AnimationFillMode;
  progressFrom?: number;
  progressTo?: number;
}

export interface StyledProps
  extends Pick<
    Partial<Props>,
    | 'backgroundColor'
    | 'progressColor'
    | 'duration'
    | 'iterationCount'
    | 'timingFunction'
    | 'fillMode'
    | 'progressFrom'
    | 'progressTo'
  > {}

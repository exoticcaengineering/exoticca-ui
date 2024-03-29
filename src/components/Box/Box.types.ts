import { ComponentPropsBaseWithOptionalChildren } from 'src/types/ComponentPropsBase';
import { BorderRadius, BoxShadow, ColorShade, Palette } from 'src/types/theme';
import * as CSS from 'csstype';

export interface BoxProps {
  background?: keyof Palette;
  backgroundShade?: keyof ColorShade;
  borderRadius?: keyof BorderRadius | Array<keyof BorderRadius>;
  borderWidth?: number | number[];
  borderStyle?: CSS.Property.BorderStyle;
  borderColor?: keyof Palette;
  borderColorShade?: keyof ColorShade;
  gutterBottom?: number;
  boxShadow?: keyof BoxShadow;
  padding?: number | number[];
  onClick?: () => void;
}
export interface Props
  extends ComponentPropsBaseWithOptionalChildren,
    BoxProps {}

export interface StyleProps
  extends Pick<
    Partial<Props>,
    | 'background'
    | 'backgroundShade'
    | 'borderRadius'
    | 'borderColor'
    | 'borderColorShade'
    | 'gutterBottom'
    | 'boxShadow'
    | 'padding'
    | 'borderWidth'
    | 'borderStyle'
  > {
  isClickable?: boolean;
}

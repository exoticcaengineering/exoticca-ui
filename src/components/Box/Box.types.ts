import { ComponentPropsBaseWithOptionalChildren } from 'src/types/ComponentPropsBase';
import { BorderRadius, BoxShadow, ColorShade, Palette } from 'src/types/theme';
import * as CSS from 'csstype';
export interface Props extends ComponentPropsBaseWithOptionalChildren {
  background?: keyof Palette;
  backgroundShade?: keyof ColorShade;
  borderRadius?: keyof BorderRadius | Array<keyof BorderRadius>;
  borderWidth?: number | number[];
  borderStyle?: CSS.Property.BorderStyle;
  borderColor?: keyof Palette;
  gutterBottom?: number;
  boxShadow?: keyof BoxShadow;
  padding?: number | number[];
  onClick?: () => void;
}

export type StyleProps = Pick<
  Partial<Props>,
  | 'background'
  | 'backgroundShade'
  | 'borderRadius'
  | 'borderColor'
  | 'gutterBottom'
  | 'boxShadow'
  | 'padding'
  | 'borderWidth'
  | 'borderStyle'
>;

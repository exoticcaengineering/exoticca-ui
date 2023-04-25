import { ComponentPropsBaseWithOptionalChildren } from 'src/types/ComponentPropsBase';
import { BorderRadius, BoxShadow, Colors } from 'src/types/theme';
import * as CSS from 'csstype';
export interface Props extends ComponentPropsBaseWithOptionalChildren {
  background?: keyof Colors;
  borderRadius?: keyof BorderRadius | Array<keyof BorderRadius>;
  borderWidth?: number | number[];
  borderStyle?: CSS.Property.BorderStyle;
  borderColor?: keyof Colors;
  gutterBottom?: number;
  boxShadow?: keyof BoxShadow;
  padding?: number | number[];
  onClick?: () => void;
}

export type StyleProps = Pick<
  Partial<Props>,
  | 'background'
  | 'borderRadius'
  | 'borderColor'
  | 'gutterBottom'
  | 'boxShadow'
  | 'padding'
  | 'borderWidth'
  | 'borderStyle'
>;

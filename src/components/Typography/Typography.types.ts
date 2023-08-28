import * as CSS from 'csstype';

import {
  Colors,
  FontFamily,
  LetterSpacing,
  FontSize,
  FontWeight,
  PrintSize,
  LineHeight,
  ColorShade,
  Palette,
} from 'src/types/theme';
import { MouseEventHandler } from 'react';
import { ComponentPropsBaseWithOptionalChildren } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBaseWithOptionalChildren {
  fontSize?: keyof FontSize;
  printSize?: keyof PrintSize;
  align?: CSS.Property.TextAlign;
  gutterBottom?: number;
  as?: keyof JSX.IntrinsicElements;
  color?: keyof Palette;
  colorShade?: keyof ColorShade;
  fontWeight?: keyof FontWeight;
  textDecoration?: CSS.Property.TextDecoration;
  textTransform?: CSS.Property.TextTransform;
  noWrap?: boolean;
  cursor?: CSS.Property.Cursor;
  onClick?: MouseEventHandler;
  fontStyle?: CSS.Property.FontStyle;
  fontFamily?: keyof FontFamily;
  lineHeight?: keyof LineHeight;
  ellipsis?: boolean;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  letterSpacing?: keyof LetterSpacing;
}

export interface StyledProps extends Omit<Props, 'component'> {
  isClickable?: boolean;
}

import * as CSS from 'csstype';
import { ComponentPropsBaseWithOptionalChildren } from '@/types/ComponentPropsBase';
import {
  Colors,
  FontFamily,
  LetterSpacing,
  FontSize,
  FontWeight,
} from 'styled-components';
import { MouseEventHandler } from 'react';

export interface Props extends ComponentPropsBaseWithOptionalChildren {
  fontSize?: keyof FontSize;
  align?: CSS.Property.TextAlign;
  gutterBottom?: number;
  as?: keyof JSX.IntrinsicElements;
  color?: keyof Colors;
  fontWeight?: keyof FontWeight;
  textDecoration?: CSS.Property.TextDecoration;
  textTransform?: CSS.Property.TextTransform;
  noWrap?: boolean;
  cursor?: CSS.Property.Cursor;
  onClick?: MouseEventHandler;
  fontStyle?: CSS.Property.FontStyle;
  fontFamily?: keyof FontFamily;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  letterSpacing?: keyof LetterSpacing;
}

export interface StyledProps extends Omit<Props, 'dangerouslySetInnerHTML' | 'as'> {}

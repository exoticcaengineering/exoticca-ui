import { Props as BoxProps } from 'src/components/Box/Box.types';
import * as CSS from 'csstype';

export interface Props extends BoxProps {
  direction?: CSS.Property.FlexDirection;
  alignItems?: CSS.Property.AlignItems;
  justifyContent?: CSS.Property.JustifyContent;
  flexWrap?: CSS.Property.FlexWrap;
  gap?: number;
}

export interface StyledProps
  extends Pick<
    Props,
    'direction' | 'alignItems' | 'justifyContent' | 'gap' | 'flexWrap'
  > {}

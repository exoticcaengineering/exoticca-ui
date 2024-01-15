import { BoxProps } from 'src/components/Box/Box.types';
import * as CSS from 'csstype';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBaseWithChildren, BoxProps {
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

import { BoxProps } from 'src/components/Box/Box.types';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';
import { Colors } from 'src/types/theme';

export interface Props extends ComponentPropsBaseWithChildren, BoxProps {
  topLineColor?: keyof Colors;
}

export interface StyledProps extends Props {}

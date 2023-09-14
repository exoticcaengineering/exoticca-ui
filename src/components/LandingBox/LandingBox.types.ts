import { Props as BoxProps } from 'src/components/Box/Box.types';
import { Colors } from 'src/types/theme';

export interface Props extends BoxProps {
  topLineColor?: keyof Colors;
}

export interface StyledProps extends Props {}

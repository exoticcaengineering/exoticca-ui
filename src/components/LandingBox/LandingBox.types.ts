import { BoxProps } from 'src/components/Box';
import { Colors } from 'src/types/theme';

export interface Props extends BoxProps {
  topLineColor?: keyof Colors;
}

export interface StyledProps extends Props {}

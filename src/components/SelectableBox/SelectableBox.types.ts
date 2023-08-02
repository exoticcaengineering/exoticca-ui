import { BoxProps } from '../Box';

export interface Props extends BoxProps {
  isSelected?: boolean;
}

export interface StyleProps extends Pick<Partial<Props>, 'isSelected'> {}

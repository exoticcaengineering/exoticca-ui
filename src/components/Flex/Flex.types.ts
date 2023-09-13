import { BoxProps } from 'src/components/Box';

export interface Props extends BoxProps {
  direction: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  items:
    | 'baseline'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  justify:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  gap: number;
}

export interface StyledProps
  extends Pick<Props, 'direction' | 'items' | 'justify' | 'gap'> {}

import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBase {
  hover: 'underlined' | 'background' | 'underlined-bold';
}

export interface StyledProps extends Props {}

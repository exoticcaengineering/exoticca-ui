import { ReactNode } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type ItemSize = 'xSmall' | 'small' | 'medium' | 'large';

export interface Props extends ComponentPropsBase {
  children: ReactNode;
}

export interface StyledProps {}

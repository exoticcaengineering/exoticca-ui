import { ReactChild } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type ItemSize = 'xSmall' | 'small' | 'medium' | 'large';

export interface Props extends ComponentPropsBase {
  children: ReactChild;
  isSelected: boolean;
  onClick: () => void;
}

export interface StyledProps extends Props {}

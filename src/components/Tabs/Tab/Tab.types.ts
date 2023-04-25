import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export type ItemSize = 'xSmall' | 'small' | 'medium' | 'large';

export interface Props extends ComponentPropsBaseWithChildren {
  isSelected: boolean;
  onClick: () => void;
}

export interface StyledProps extends Props {}

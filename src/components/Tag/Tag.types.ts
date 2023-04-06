import { Colors } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type TagSize = 'small'; // | 'medium' we may have more sizes in the future ;
export type TagVariant = 'contained' | 'outlined';

export interface Props extends ComponentPropsBase {
  size?: TagSize;
  text: string;
  variant?: TagVariant;
  color?: keyof Colors; // for contained variant is the background color, for outlined is the border color
  textColor?: keyof Colors;
}

export interface StyledProps extends Omit<Props, 'text'> {}

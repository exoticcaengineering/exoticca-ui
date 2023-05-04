import { Colors, IconName } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

export interface Props extends ComponentPropsBase {
  header?: string | JSX.Element;
  content: string | JSX.Element;
  isOpen?: boolean;
  isDisabled?: boolean;
  onClose?: () => void;
  icon?: IconName;
  backgroundColor?: keyof Colors;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
}

export interface StyledProps
  extends Pick<Props, 'isOpen' | 'isDisabled' | 'backgroundColor'> {}

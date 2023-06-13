import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

export interface Props extends ComponentPropsBase {
  header?: string | JSX.Element;
  content: string | JSX.Element;
  isOpen?: boolean;
  isDisabled?: boolean;
  onClose?: () => void;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
}

export interface StyledProps extends Pick<Props, 'isOpen' | 'isDisabled'> {
  isEnabledAndOpen?: boolean;
}

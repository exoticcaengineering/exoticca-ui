import { ChangeEvent } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBase {
  name: string;
  label?: string;
  defaultChecked?: boolean;
  error?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

export interface StyledProps
  extends Pick<Props, 'error' | 'label' | 'secondary' | 'disabled'> {}

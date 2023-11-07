import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

type LabelPosition = 'inside' | 'outside';

export interface Props extends ComponentPropsBase {
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  label: string;
  labelPosition?: LabelPosition;
  placeholder?: string;
  rounded?: 'none' | 'left' | 'right' | 'both';
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  name?: string;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  type?: HTMLInputTypeAttribute;
  autoComplete?: 'on' | 'off';
}

export interface StyleProps
  extends Pick<
    Partial<Props>,
    'labelPosition' | 'rounded' | 'placeholder' | 'label'
  > {
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
}

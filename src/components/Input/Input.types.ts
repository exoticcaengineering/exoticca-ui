import { ChangeEvent } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

type LabelPosition = 'inside' | 'outside';

export interface Props extends ComponentPropsBase {
  startIcon?: IconConfig;
  label: string;
  labelPosition?: LabelPosition;
  placeholder?: string;
  rounded?: 'none' | 'left' | 'right' | 'both';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export interface StyleProps
  extends Pick<
    Partial<Props>,
    'labelPosition' | 'rounded' | 'placeholder' | 'label'
  > {
  hasIcon?: boolean;
}

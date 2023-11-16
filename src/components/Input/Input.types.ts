import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

type LabelPosition = 'inside' | 'outside';

export interface Props
  extends ComponentPropsBase,
    React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  label: string;
  labelPosition?: LabelPosition;
  rounded?: 'none' | 'left' | 'right' | 'both';
  defaultValue?: string;
  errorMessage?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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

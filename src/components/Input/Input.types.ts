import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

type LabelPosition = 'inside' | 'outside';

export interface Props
  extends ComponentPropsBase,
    React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  label: string;
  labelPosition?: LabelPosition;
  rounded?: 'none' | 'left' | 'right' | 'both';
  defaultValue?: string;
  errorMessage?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  autoComplete?: 'on' | 'off';
  validate?: (value: string) => boolean;
}

export interface StyleProps
  extends Pick<
    Partial<Props>,
    'labelPosition' | 'rounded' | 'placeholder' | 'label'
  > {
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
}

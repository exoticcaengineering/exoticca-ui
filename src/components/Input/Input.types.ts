import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';

type LabelPosition = 'inside' | 'outside';

export interface InputProps extends ComponentPropsBase {
  icon: IconName | undefined;
  label: string;
  labelPosition?: LabelPosition;
  placeholder: string;
  rounded: 'none' | 'left' | 'right' | 'both';
  setValue: (state: string) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  value: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export interface StyleProps {
  hasIcon?: boolean;
  label?: string;
  placeholder?: string;
  rounded?: 'none' | 'left' | 'right' | 'both';
}

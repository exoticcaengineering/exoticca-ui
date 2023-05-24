import { IconName } from 'src/types/IconNames';

export interface InputProps {
  icon: IconName | undefined;
  label: string;
  placeholder: string;
  rounded: 'none' | 'left' | 'right' | 'both';
  setValue: (state: string) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  value: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export interface StyleProps {
  icon?: IconName | '';
  label?: string;
  placeholder?: string;
  rounded?: 'none' | 'left' | 'right' | 'both';
}

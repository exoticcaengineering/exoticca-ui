import { IconName } from 'src/types/IconNames';

export interface InputProps {
  icon: IconName | undefined;
  label: string;
  placeholder: string;
  rounded: 'left' | 'right' | 'both';
  setValue: (state: string) => void;
  onClick?: () => void;
  value: string;
}

export interface StyleProps {
  icon?: IconName | '';
  label?: string;
  placeholder?: string;
  rounded?: 'left' | 'right' | 'both';
}

export interface InputFilterProps extends InputProps {
  children: React.ReactNode;
  selectedValue: string;
}

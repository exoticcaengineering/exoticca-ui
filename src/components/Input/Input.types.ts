import { IconName } from 'src/types/IconNames';

export interface InputProps {
  icon: IconName | undefined;
  label: string;
  placeholder: string;
  rounded: 'none' | 'left' | 'right' | 'both';
  setValue: (state: string) => void;
  onClick?: (event?: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  value: string;
}

export interface StyleProps {
  icon?: IconName | '';
  label?: string;
  placeholder?: string;
  rounded?: 'none' | 'left' | 'right' | 'both';
}

export interface InputFilterProps extends InputProps {
  inputList: (props: InputListProps) => JSX.Element[] | JSX.Element;
}

export interface InputListProps {
  closeDropdown: () => void;
}

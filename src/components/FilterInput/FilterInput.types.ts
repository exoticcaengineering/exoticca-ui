import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';
import { InputProps } from '../Input';

export interface InputListProps {
  closeDropdown: () => void;
}

export interface Props extends InputProps, ComponentPropsBase {
  inputList: (props: InputListProps) => JSX.Element[] | JSX.Element;
}

export interface StyleProps {
  icon?: IconName;
  label?: string;
  placeholder?: string;
  rounded?: 'left' | 'right' | 'both';
}

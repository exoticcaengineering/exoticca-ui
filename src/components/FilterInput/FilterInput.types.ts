import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconName } from 'src/types/IconNames';
import { Props } from '../Input/Input.types';

export interface InputListProps {
  closeDropdown: () => void;
}

export interface InputFilterProps extends Props, ComponentPropsBase {
  inputList: (props: InputListProps) => JSX.Element[] | JSX.Element;
}

export interface StyleProps {
  icon?: IconName;
  label?: string;
  placeholder?: string;
  rounded?: 'left' | 'right' | 'both';
}

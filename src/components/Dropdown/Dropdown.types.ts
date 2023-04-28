import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { ButtonProps } from '../Button';
import { ButtonColor } from '../Button/Button.types';

export type DropDownPosition = 'left' | 'right';

export type DropDownSize = 'small' | 'medium';

export interface Props
  extends ComponentPropsBase,
    Pick<ButtonProps, 'text' | 'startIcon' | 'size'> {
  position?: DropDownPosition;
  withCloseButton?: boolean;
  onClick?: (isOpen: boolean) => void;
  onClose?: () => void;
  buttonOpenColor?: Extract<ButtonColor, 'black' | 'white'>;
  buttonCloseColor?: Extract<ButtonColor, 'black' | 'white'>;
  dropdownList: (props: DropdownListProps) => JSX.Element;
}

export interface StyledProps extends Pick<Props, 'position'> {
  isOpen?: boolean;
}

export interface DropdownListProps {
  closeDropdown: () => void;
}

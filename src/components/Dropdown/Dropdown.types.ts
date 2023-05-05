import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { ButtonColor } from '../Button/Button.types';
import { IconConfig } from '../Icon';
import { Colors } from 'src/types';

export type DropDownPosition = 'left' | 'right';

export type DropDownSize = 'small' | 'medium';

export interface Props extends ComponentPropsBase {
  position?: DropDownPosition;
  text?: string;
  withCloseButton?: boolean;
  onClick?: (isOpen: boolean) => void;
  onClose?: () => void;
  size?: DropDownSize;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  dropdownList: (props: DropdownListProps) => JSX.Element;
  inverseStyle?: boolean;
}

export interface StyledProps
  extends Pick<Props, 'position' | 'size' | 'inverseStyle'> {
  isOpen?: boolean;
}

export interface DropdownListProps {
  closeDropdown: () => void;
}

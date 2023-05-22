import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

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

export interface GetColorParams {
  isOpen?: boolean;
  inverseStyle?: boolean;
}

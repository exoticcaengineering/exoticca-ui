import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { Palette, Theme } from 'src/types';

export type DropDownPosition = 'left' | 'right';

export type DropDownSize = 'small' | 'medium';

export interface Props extends ComponentPropsBase {
  position?: DropDownPosition;
  text?: string;
  withCloseButton?: boolean;
  onClick?: (isOpen: boolean) => void;
  onClose?: () => void;
  size?: DropDownSize;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  dropdownList: (props: DropdownListProps) => JSX.Element;
  textColor?: keyof Palette;
  openBackgroundColor?: keyof Palette;
  isDefaultOpen?: boolean;
}

export interface StyledProps
  extends Pick<
    Props,
    'position' | 'size' | 'textColor' | 'openBackgroundColor'
  > {
  isOpen?: boolean;
}

export interface DropdownListProps {
  closeDropdown: () => void;
  isOpen?: boolean;
}

export interface GetColorParams {
  theme: Theme;
  isOpen?: boolean;
  openBackgroundColor?: keyof Palette;
  textColor?: keyof Palette;
}

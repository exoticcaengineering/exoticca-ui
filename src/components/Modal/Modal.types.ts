import { IconName } from 'src/types/IconNames';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export interface ButtonComponentProps {
  onClose: () => void;
}

export interface ModalProps extends ComponentPropsBaseWithChildren {
  id: string;
  headerContent?: React.ReactNode;
  image?: string;
  blackoutHeader?: boolean;
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  highlights?: {
    icon?: IconName;
    image?: string;
    text?: string;
    color?: string;
  }[];
  footer?: string | JSX.Element;
  ButtonComponent?: (props: ButtonComponentProps) => JSX.Element | null;
  footerBackgroundColor?: string;
  width?: string;
  fullScreen?: boolean;
  isClosable?: boolean;
  onOpenCallback?(): void;
  onCloseCallback?(): void;
  customContentSpacing?: object;
  disableCloseOnClickOutside?: boolean;
  closableFixed?: boolean;
  closeBtnshiftLeft?: string;
  closeBtnTransparant?: boolean;
  closeBtnText?: string;
  darkMode?: boolean;
  fullWidthContent?: boolean;
  fullHeightContent?: boolean;
  mobileFullscreen?: boolean;
  overflowHidden?: boolean;
}

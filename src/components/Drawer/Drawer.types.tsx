import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export interface CustomTriggerProps {
  onClick?: () => void;
}

export type DrawerRef = { open(): void; close(): void };

export interface Props extends ComponentPropsBaseWithChildren {
  openHeight: number;
  onOpen?: () => void;
  onClose?: () => void;
  isOpenOnLoad?: boolean;
  CustomTrigger?: (props: CustomTriggerProps) => JSX.Element | null;
}

export interface StyledProps {
  heightProp?: number;
  isOpen?: boolean;
}

import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export type DrawerRef = { open(): void; close(): void };

export interface Props extends ComponentPropsBaseWithChildren {
  openHeight: number;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface StyledProps {
  heightProp?: number;
  isOpen?: boolean;
}

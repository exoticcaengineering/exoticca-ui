import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export type DrawerRef = { open(): void; close(): void };

export interface DrawerProps extends ComponentPropsBaseWithChildren {
  openHeight: number;
}

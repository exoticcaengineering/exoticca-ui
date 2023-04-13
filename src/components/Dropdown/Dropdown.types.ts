import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type MenuPropsType = {
  items: any[];
};

export interface DropdownListProps extends ComponentPropsBase {
  subMenuItems: any[];
}

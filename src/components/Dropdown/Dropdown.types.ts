import { Dispatch, SetStateAction } from 'react';
import {
  ComponentPropsBase,
  ComponentPropsBaseWithChildren,
} from 'src/types/ComponentPropsBase';
import { ButtonProps } from '../Button';

export type DropDownPosition = 'left' | 'right';

export type DropDownSize = 'small' | 'medium';
export interface Props
  extends ComponentPropsBaseWithChildren,
    Pick<ButtonProps, 'text' | 'startIcon' | 'originalIconColor' | 'size'> {
  position?: DropDownPosition;
  withCloseButton?: boolean;
}

export interface StyledProps extends Pick<Props, 'position'> {
  isOpen?: boolean;
}

export type MenuPropsType = {
  items: MenuItems[];
  position: DropDownPosition;
  withCloseButton: boolean;
};

export interface DropdownListProps extends ComponentPropsBase {
  position: DropDownPosition;
  subMenuItems: {
    parent: ParentItem;
    children: ChildItem;
  }[];
}

export interface ListParentItemsProps extends ComponentPropsBase {
  subItem: SubMenuItem;
  setIsSelected: (state: string) => void;
  isSelected: string;
  setChildrenItems: Dispatch<SetStateAction<SubMenuItem | null>>;
}

export interface ListChildrenItemsProps extends ComponentPropsBase {
  isSelected: string;
  childrenItems: SubMenuItem;
}

export type MenuItems = DropdownItem[];

interface ParentItem {
  name: string;
}

interface ChildItem {
  title: string;
  items: { icon: string; name: string; slug: string }[];
}

export interface SubMenuItem {
  parent: ParentItem;
  children: ChildItem;
}

interface DropdownItem {
  title: string;
  items: SubMenuItem[];
}

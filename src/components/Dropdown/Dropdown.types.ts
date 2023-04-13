import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type MenuPropsType = {
  items: MenuItems[];
};

export interface DropdownProps extends ComponentPropsBase {
  children: ReactNode;
  position?: 'left' | 'right';
}
export interface DropdownListProps extends ComponentPropsBase {
  subMenuItems: {
    parent: ParentItem;
    children: ChildItem[];
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
  icon: string;
  name: string;
  slug: string;
}

export interface SubMenuItem {
  parent: ParentItem;
  children: ChildItem[];
}

interface DropdownItem {
  title: string;
  items: SubMenuItem[];
}

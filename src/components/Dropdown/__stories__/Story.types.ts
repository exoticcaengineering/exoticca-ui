import { Dispatch, SetStateAction } from 'react';
import { DropDownPosition } from '../Dropdown.types';

export interface DropdownListProps {
  position: DropDownPosition;
  darkMode?: boolean;
  subMenuItems: {
    parent: ParentItem;
    children: ChildItem;
  }[];
}

export interface ListParentItemsProps {
  darkMode?: boolean;
  subItem: SubMenuItem;
  setIsSelected: (state: string) => void;
  isSelected: string;
  setChildrenItems: Dispatch<SetStateAction<SubMenuItem | null>>;
}

export interface ListChildrenItemsProps {
  darkMode?: boolean;
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

export type MenuPropsType = {
  items: MenuItems[];
  position: DropDownPosition;
  withCloseButton: boolean;
};

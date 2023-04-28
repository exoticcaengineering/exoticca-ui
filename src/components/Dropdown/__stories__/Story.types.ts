import { Dispatch, SetStateAction } from 'react';
import { DropDownPosition } from '../Dropdown.types';

export interface DropdownListProps {
  position: DropDownPosition;
  subMenuItems: {
    parent: ParentItem;
    children: ChildItem;
  }[];
}

export interface ListParentItemsProps {
  subItem: SubMenuItem;
  setIsSelected: (state: string) => void;
  isSelected: string;
  setChildrenItems: Dispatch<SetStateAction<SubMenuItem | null>>;
}

export interface ListChildrenItemsProps {
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

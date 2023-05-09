import { FontSize } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Tab {
  id: string;
  isSelected?: boolean;
  title: string;
  fontSize?: keyof FontSize;
  content: JSX.Element;
}
export interface TabProps extends Omit<Tab, 'content' | 'id'> {
  onClick: () => void;
}
export interface Props extends ComponentPropsBase {
  tabs: Tab[];
}

export interface StyledProps extends Pick<TabProps, 'isSelected'> {}

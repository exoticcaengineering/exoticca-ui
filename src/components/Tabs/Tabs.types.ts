import { FontSize } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Tab {
  id: string;
  isSelected?: boolean;
  title: string;
  content: JSX.Element;
}

export interface Props extends ComponentPropsBase {
  tabs: Tab[];
  titleFontSize?: keyof FontSize;
}
export interface TabProps
  extends Omit<Tab, 'content' | 'id'>,
    Pick<Props, 'titleFontSize'> {
  onClick: () => void;
}

export interface StyledProps extends Pick<TabProps, 'isSelected'> {}

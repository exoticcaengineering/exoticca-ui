import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export type YPositionType = 'top' | 'center' | 'bottom';
export type XPositionType = 'left' | 'center' | 'right';
export type PositionType = XPositionType | YPositionType;

export interface Props extends ComponentPropsBase {
  horizontalPosition: XPositionType;
  verticalPosition: YPositionType;
  backgroundImg?: string;
  title: string;
  subtitle: string;
  height?: number;
  Content?: React.FC;
  columns?: number;
  rows?: number;
}

export interface StyledProps {
  rounded?: boolean;
}

export interface StyledWrapperProps {
  testId?: string;
  image?: string;
  height?: number;
  rows: number;
  columns: number;
}

export interface StyledContentSectionProps {
  row: number;
  column: number;
}

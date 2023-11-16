import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBaseWithChildren {
  height?: number;
  columns?: number;
  rows?: number;
}

export interface StyledProps {
  rounded?: boolean;
}

export interface StyledWrapperProps {
  testId?: string;
  height?: number;
  rows: number;
  columns: number;
}

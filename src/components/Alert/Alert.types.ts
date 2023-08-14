import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props extends ComponentPropsBase {
  status: 'warning' | 'info' | 'success';
  title?: string;
  text?: string;
  rounded?: boolean;
}

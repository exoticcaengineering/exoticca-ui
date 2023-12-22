import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props
  extends ComponentPropsBase,
    React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export interface StyledProps {
  isChecked?: boolean;
}

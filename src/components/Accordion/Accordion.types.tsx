import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface CustomTriggerProps {
  isOpen: boolean;
  onClick?: () => void;
}

interface AccordionContentProps {
  isOpen: boolean;
}

export interface Props extends ComponentPropsBase {
  header?: string | JSX.Element;
  content:
    | string
    | JSX.Element
    | ((props: AccordionContentProps) => JSX.Element);
  isOpen?: boolean;
  isDisabled?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  CustomTrigger?: (props: CustomTriggerProps) => JSX.Element | null;
  CustomTriggerEnd?: (props: CustomTriggerProps) => JSX.Element | null;
  underline?: boolean;
}

export interface StyledProps
  extends Pick<Props, 'isOpen' | 'isDisabled' | 'underline'> {
  isEnabledAndOpen?: boolean;
  hasCustomTrigger?: boolean;
}

import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';

export interface CustomTriggerProps {
  isOpen: boolean;
  onClick?: () => void;
}

interface AccordionContentProps {
  isOpen: boolean;
}

export interface Props extends ComponentPropsBase {
  header?: string | JSX.Element;
  content: (props: AccordionContentProps) => JSX.Element;
  isOpen?: boolean;
  isDisabled?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  CustomTrigger?: (props: CustomTriggerProps) => JSX.Element | null;
  CustomTriggerEnd?: (props: CustomTriggerProps) => JSX.Element | null;
}

export interface StyledProps extends Pick<Props, 'isOpen' | 'isDisabled'> {
  isEnabledAndOpen?: boolean;
  hasCustomTrigger?: boolean;
}

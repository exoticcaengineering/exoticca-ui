import { ReactChild } from 'react';
import { IconName } from 'src/types';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface AccordionProps extends ComponentPropsBase {
  header?: string | ReactChild | undefined;
  content: string | ReactChild;
  isOpen: boolean;
  isDisabled: boolean;
  icon: IconName;
}

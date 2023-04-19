import { ChangeEvent } from 'react';
import { IconName } from 'src/types/IconNames';

export interface InputProps {
  icon: IconName;
  label: string;
  placeholder: string;
  rounded: 'left' | 'right' | 'both';
  setValue: (state: string) => void;
  onClick?: (e: ChangeEvent) => void;
  value: string;
}

export interface StyleProps {
  icon?: IconName;
  label?: string;
  placeholder?: string;
  rounded?: 'left' | 'right' | 'both';
}

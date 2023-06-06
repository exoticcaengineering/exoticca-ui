import { MouseEventHandler } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { IconConfig } from '../Icon';
import { Palette, Theme } from 'src/types';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonColor = keyof Palette;
export interface Props extends ComponentPropsBase {
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  shape?: 'square' | 'rounded';
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  onClick?: MouseEventHandler | undefined;
  fullWidth?: boolean;
}
export interface IconButtonProps
  extends ComponentPropsBase,
    Pick<Props, 'color' | 'size' | 'onClick' | 'variant' | 'isDisabled'> {
  icon: IconConfig;
}

export interface StyledProps extends Props {}

export interface ButtonHelperParams {
  theme: Theme;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

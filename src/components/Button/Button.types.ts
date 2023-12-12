import { MouseEventHandler } from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { Palette, Theme } from 'src/types';
import { IconSize } from 'src/components/IconWrapper';

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
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: MouseEventHandler<Element> | undefined;
  fullWidth?: boolean;
}
export interface IconButtonProps
  extends ComponentPropsBase,
    Pick<Props, 'color' | 'size' | 'onClick' | 'variant' | 'isDisabled'> {
  icon: JSX.Element;
}

export interface StyledProps extends Props {
  iconSize?: IconSize;
}

export interface ButtonHelperParams {
  theme: Theme;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

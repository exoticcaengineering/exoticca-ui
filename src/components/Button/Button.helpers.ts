import { Theme } from 'src/types';
import { ButtonHelperParams, ButtonSize, ButtonVariant } from './Button.types';
import { IconSize } from 'src/components/IconWrapper';

export const setBackgroundColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return theme.palette[color].main;
  return 'transparent';
};

export const setHoverBackgroundColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return theme.palette[color].medium;

  return theme.palette[color].light;
};

export const setDisabledBackgroundColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return theme.palette[color].light;
  return 'transparent';
};

export const setDisabledBorderColor = (variant: ButtonVariant) => {
  if (variant === 'secondary') return 'polarNightMedium';
  return 'transparent';
};

export const setTextColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return theme.palette[color].contrast;
  return theme.palette[color].main;
};

export const setBorderColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'secondary') return setTextColor({ theme, variant, color });
  return 'transparent';
};

export const setFocusBoxShadowColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary')
    return setBackgroundColor({ theme, variant, color });
  if (variant === 'secondary') return theme.palette[color].medium;
  return 'transparent';
};

export const setFocusBorderColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  return setTextColor({ theme, variant, color });
};

// setFocusBackgroundColor
export const setFocusBackgroundColor = ({
  theme,
  variant = 'primary',
  color = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'tertiary') return theme.palette[color].light;
  return setBackgroundColor({ theme, variant, color });
};

export const setPadding = (theme: Theme, size: ButtonSize) => {
  const sizes = {
    small: theme.spacing(1.375),
    medium: theme.spacing(2, 2.25),
    large: theme.spacing(2.25, 2.75),
  };

  return sizes[size];
};

export const setFontsize = (theme: Theme, size: ButtonSize) => {
  const fontSizes = {
    small: theme.typography.fontSize.body2,
    medium: theme.typography.fontSize.default,
    large: theme.typography.fontSize.button1,
  };

  return fontSizes[size];
};

export const getIconSize = (
  size: ButtonSize,
): Extract<IconSize, 'regular' | 'medium'> => {
  if (size === 'small') return 'regular';
  return 'medium';
};

export const getIconButtonSize = (size: ButtonSize) => {
  const sizes = {
    small: '32px',
    medium: '42px',
    large: '56px',
  };

  return sizes[size];
};

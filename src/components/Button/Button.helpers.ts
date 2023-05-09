import { Colors, Theme } from 'src/types';
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.types';
import { IconSize } from '../Icon';

export const mapButtonColorToThemeColor = (
  color: ButtonColor,
): keyof Colors => {
  const colors: Record<ButtonColor, keyof Colors> = {
    promoYellow: 'silentSavana',
    promoOrange: 'carribeanSunrise',
    promoBlue: 'pacificOcean',
    promoGreen: 'savageForest',
    black: 'polarNight',
    white: 'arcticWind',
  };

  return colors[color];
};

export const setSecondaryBackgroundColor = () => 'transparent';

export const setBackgroundColor = (
  variant: ButtonVariant,
  color: ButtonColor,
): keyof Colors => {
  if (variant === 'primary') return mapButtonColorToThemeColor(color);
  return 'transparent';
};

export const setPrimaryTextColor = (color: ButtonColor): keyof Colors => {
  if (color === 'black') return 'arcticWind';
  return 'polarNight';
};

export const setSecondaryTextColor = (color: ButtonColor): keyof Colors =>
  mapButtonColorToThemeColor(color);

export const setTertiaryTextColor = (color: ButtonColor): keyof Colors => {
  if (color === 'white') return 'arcticWind';
  return 'polarNight';
};

export const setTextColor = (variant: ButtonVariant, color: ButtonColor) => {
  switch (variant) {
    case 'primary':
      return setPrimaryTextColor(color);
    case 'secondary':
      return setSecondaryTextColor(color);
    case 'tertiary':
      return setTertiaryTextColor(color);
  }
};

export const setPadding = (theme: Theme, size: ButtonSize) => {
  const sizes = {
    small: theme.spacing(1.375),
    medium: theme.spacing(2, 2.25),
    large: theme.spacing(2.313, 2.75),
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

export const getIconSize = (size: ButtonSize): IconSize => {
  if (size === 'small') return 'regular';
  return 'medium';
};

export const getIconButtonSize = (size: ButtonSize) => {
  const sizes = {
    small: '32px',
    medium: '42px',
    large: '48px',
  };

  return sizes[size];
};

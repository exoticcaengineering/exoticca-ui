import { Colors, Theme } from 'src/types';
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.types';
import { IconSize } from '../Icon';

const primaryHoverBackgroundColor: Record<ButtonColor, keyof Colors> = {
  arcticWind: 'polarNightMedium',
  polarNight: 'polarNightMedium',
  pacificOcean: 'pacificOceanMedium',
  savageForest: 'savageForestMedium',
  silentSavana: 'silentSavanaMedium',
  carribeanSunrise: 'carribeanSunriseMedium',
};

const secondaryHoverBackgroundColor: Partial<
  Record<keyof Colors, keyof Colors>
> = {
  arcticWind: 'polarNightMedium',
  polarNight: 'polarNightLight',
};

const primaryDisabledBackgroundColor: Record<ButtonColor, keyof Colors> = {
  arcticWind: 'polarNightLight',
  polarNight: 'polarNightLight',
  pacificOcean: 'pacificOceanLight',
  savageForest: 'savageForestLight',
  silentSavana: 'silentSavanaLight',
  carribeanSunrise: 'carribeanSunriseLight',
};

export const setBackgroundColor = (
  variant: ButtonVariant,
  color: ButtonColor,
): keyof Colors => {
  if (variant === 'primary') return color;
  return 'transparent';
};

export const setHoverBackgroundColor = (
  variant: ButtonVariant,
  color: ButtonColor,
) => {
  if (variant === 'primary')
    return primaryHoverBackgroundColor[color] ?? 'polarNightMedium';

  return secondaryHoverBackgroundColor[color] ?? 'polarNightLight';
};

export const setDisabledBackgroundColor = (
  variant: ButtonVariant,
  color: ButtonColor,
) => {
  if (variant === 'primary')
    return primaryDisabledBackgroundColor[color] ?? 'polarNightLight';
  return 'transparent';
};

export const setDisabledBorderColor = (variant: ButtonVariant) => {
  if (variant === 'secondary') return 'polarNightMedium';
  return 'transparent';
};

export const setPrimaryTextColor = (color: ButtonColor): keyof Colors => {
  if (color === 'polarNight') return 'arcticWind';
  return 'polarNight';
};

//secondary  only have polarNight and arcticWind colors
export const setSecondaryTextColor = (color: ButtonColor): keyof Colors => {
  if (color === 'arcticWind') return 'arcticWind';
  return 'polarNight';
};

// tertiary only have polarNight and arcticWind colors
export const setTertiaryTextColor = (color: ButtonColor): keyof Colors => {
  if (color === 'arcticWind') return 'arcticWind';
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

export const setBorderColor = (variant: ButtonVariant, color: ButtonColor) => {
  if (variant === 'secondary') return setTextColor(variant, color);
  return 'transparent';
};

export const setFocusBoxShadowColor = (
  variant: ButtonVariant,
  color: ButtonColor,
) => {
  if (variant === 'primary') return setBackgroundColor(variant, color);
  if (variant === 'secondary') return setTextColor(variant, color);
  return 'transparent';
};

export const setFocusBorderColor = (
  variant: ButtonVariant,
  color: ButtonColor,
) => {
  if (variant === 'primary') return setTextColor(variant, color);
  return setTextColor(variant, color);
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

export const getIconSize = (size: ButtonSize): IconSize => {
  if (size === 'small') return 'regular';
  return 'medium';
};

export const getIconButtonSize = (size: ButtonSize) => {
  const sizes = {
    small: '34px',
    medium: '42px',
    large: '56px',
  };

  return sizes[size];
};

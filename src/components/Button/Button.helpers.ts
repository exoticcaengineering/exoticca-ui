import { Colors, Theme } from 'src/types';
import { ButtonColor, ButtonSize } from './Button.types';
import { IconSize } from '../Icon';

export const setColor = (theme: Theme, color: ButtonColor) => {
  const colors = {
    promoYellow: theme.colors.silentSavana,
    promoOrange: theme.colors.carribeanSunrise,
    promoBlue: theme.colors.pacificOcean,
    promoGreen: theme.colors.savageForest,
    black: theme.colors.polarNight,
    white: theme.colors.arcticWind,
  };

  return colors[color];
};

export const setSize = (theme: Theme) => ({
  small: theme.spacing(1.375),
  medium: theme.spacing(2, 2.25),
  large: theme.spacing(2.313, 2.75),
});

export const setFontsize = (theme: Theme) => ({
  small: theme.typography.fontSize.body2,
  medium: theme.typography.fontSize.default,
  large: theme.typography.fontSize.button1,
});

export const setContainColor = (color: ButtonColor): keyof Colors => {
  if (color === 'black') return 'arcticWind';
  return 'polarNight';
};

export const setTertiaryColor = (color: ButtonColor): keyof Colors => {
  if (color === 'white') return 'arcticWind';
  return 'polarNight';
};

export const getIconSize = (size: ButtonSize): IconSize => {
  if (size === 'small') return 'regular';
  return 'medium';
};

import { Colors } from 'src/types';
import { GetColorParams } from './Dropdown.types';
import { Theme } from 'src/types';
import { DropDownSize } from './Dropdown.types';

export const getBorderColor = ({
  isOpen,
  darkMode,
}: GetColorParams): keyof Colors => {
  if (!isOpen) return 'transparent';
  if (darkMode) return 'arcticWind';
  return 'polarNightMedium';
};

export const getBackgroundColor = ({
  isOpen,
  darkMode,
}: GetColorParams): keyof Colors => {
  if (!isOpen) return 'transparent';
  if (darkMode) return 'polarNight';
  return 'arcticWind';
};

export const getColor = ({
  isOpen,
  darkMode,
}: GetColorParams): keyof Colors => {
  if (!darkMode) {
    return isOpen ? 'polarNight' : 'arcticWind';
  }
  return isOpen ? 'arcticWind' : 'polarNight';
};
export const getPadding = (theme: Theme, size: DropDownSize) => {
  const paddings = {
    small: [1.5, 0.5],
    medium: [1.5],
  };

  return theme.spacing(...paddings[size]);
};

export const getUnderLineBottomPosition = (size: DropDownSize) => {
  switch (size) {
    case 'small':
      return '6px';
    case 'medium':
      return '6px';
  }
};

export const getUnderLineLeftRightPosition = (size: DropDownSize) => {
  switch (size) {
    case 'small':
      return '4px';
    case 'medium':
      return '12px';
  }
};

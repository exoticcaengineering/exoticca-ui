import { GetColorParams } from './Dropdown.types';
import { Theme } from 'src/types';
import { DropDownSize } from './Dropdown.types';

export const getBorderColor = ({
  theme,
  isOpen,
  openBackgroundColor = 'background',
}: GetColorParams) => {
  if (!isOpen) return 'transparent';
  return theme.palette[openBackgroundColor].medium;
};

export const getBackgroundColor = ({
  theme,
  isOpen,
  openBackgroundColor = 'background',
}: GetColorParams) => {
  if (!isOpen) return 'transparent';
  return theme.palette[openBackgroundColor].main;
};

export const getTextColor = ({
  theme,
  isOpen,
  openBackgroundColor = 'background',
  textColor,
}: GetColorParams) => {
  if (isOpen) return theme.palette[openBackgroundColor].contrast;
  if (textColor) return theme.palette[textColor].main;

  return 'currentColor';
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

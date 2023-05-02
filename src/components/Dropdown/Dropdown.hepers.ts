import { Theme } from 'src/types';
import { DropDownSize } from './Dropdown.types';

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
      return '-6px';
    case 'medium':
      return '-8px';
  }
};

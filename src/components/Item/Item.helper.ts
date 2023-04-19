import { Theme } from 'src/types';
import { ItemSize } from './Item.types';

export const getPaddingBySize = (theme: Theme, size: ItemSize) => {
  switch (size) {
    case 'xSmall':
      return theme.spacing(1, 0);
    case 'small':
      return theme.spacing(1, 1);
    case 'medium':
      return theme.spacing(1, 2);
    case 'large':
      return theme.spacing(1, 3);
    default:
      return theme.spacing(1, 2); // default to medium
  }
};

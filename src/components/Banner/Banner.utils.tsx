import { PositionType } from './Banner.types';

export const getPosition = (position?: PositionType) => {
  switch (position) {
    case 'top':
    case 'left':
      return 2;
    case 'center':
      return 3;
    case 'bottom':
    case 'right':
      return 4;
    default:
      return 3;
  }
};

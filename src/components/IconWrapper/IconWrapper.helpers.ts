import { IconSize } from './IconWrapper.types';

export const getIconSize = (size?: IconSize) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'regular':
      return '18px';
    case 'medium':
      return '24px';
    case 'large':
      return '40px';
    case 'xLarge':
      return '50px';
    default:
      return '18px'; // default size
  }
};

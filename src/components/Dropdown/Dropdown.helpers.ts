import { TextBody1, TextBody2 } from 'src/components/TypographyVariants';
import { DropDownSize } from './Dropdown.types';
import { IconSize } from 'src/components/Icon';

export const getTextComponentBySize = (size: DropDownSize) => {
  switch (size) {
    case 'small':
      return TextBody2;
    case 'medium':
      return TextBody1;
    default:
      return TextBody1;
  }
};

export const getIconSize = (size: DropDownSize): IconSize => {
  switch (size) {
    case 'small':
      return 'small';
    case 'medium':
      return 'regular';
    default:
      return 'regular';
  }
};

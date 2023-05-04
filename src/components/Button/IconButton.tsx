import { FC } from 'react';
import { Icon, IconSize } from '../Icon';
import { StyledIconButtonWrapper } from './Button.styles';
import { ButtonSize, IconButtonProps } from './Button.types';

export const IconButton: FC<IconButtonProps> = ({
  icon,
  color = 'black',
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  const getIconSize = (size: ButtonSize): IconSize => {
    switch (size) {
      case 'small':
        return 'regular';
      case 'medium':
        return 'regular';
      case 'large':
        return 'medium';
      default:
        return 'regular';
    }
  };
  return (
    <StyledIconButtonWrapper
      color={color}
      variant={variant}
      size={size}
      {...props}
    >
      <Icon {...icon} size={getIconSize(size)} />
    </StyledIconButtonWrapper>
  );
};

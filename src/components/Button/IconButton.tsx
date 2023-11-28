import { FC } from 'react';
import { StyledIconButtonWrapper } from './Button.styles';
import { ButtonSize, IconButtonProps } from './Button.types';
import { IconSize } from 'icons/IconWrapper';

export const IconButton: FC<IconButtonProps> = ({
  icon,
  color = 'primary',
  variant = 'primary',
  size = 'medium',
  isDisabled,
  ...props
}) => {
  const getIconSize = (size: ButtonSize): IconSize => {
    switch (size) {
      case 'small':
        return 'regular';
      case 'medium':
        return 'medium';
      case 'large':
        return 'large';
      default:
        return 'medium';
    }
  };
  return (
    <StyledIconButtonWrapper
      color={color}
      variant={variant}
      size={size}
      disabled={isDisabled}
      data-testid={props.testId}
      {...props}
    >
      {icon}
    </StyledIconButtonWrapper>
  );
};

import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton } from './Button.styles';

export const Button: FC<Props> = ({
  text,
  size,
  color,
  shape,
  leftIcon,
  rightIcon,
}) => {
  return (
    <StyledButton shape={shape} color={color} size={size}>
      {rightIcon && rightIcon}
      {text && text}
      {leftIcon && leftIcon}
    </StyledButton>
  );
};

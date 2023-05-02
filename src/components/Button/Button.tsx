import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton } from './Button.styles';
import { Icon } from '../Icon/Icon';
import { Spinner } from './Spinner';
import {
  getIconSize,
  setContainColor,
  setTertiaryColor,
} from './Button.helpers';
import { Typography } from '../Typography';

export const Button: FC<Props> = ({
  text,
  size = 'medium',
  color = 'black',
  onClick,
  shape = 'square',
  startIcon,
  endIcon,
  centerIcon,
  variant = 'primary',
  className,
  testId,
  isLoading,
  isDisabled,
  fullWidth,
}) => {
  const setColor = () => {
    if (variant === 'tertiary') return setTertiaryColor(color);
    return setContainColor(color);
  };

  const iconSize = getIconSize(size);

  return (
    <StyledButton
      fullWidth={fullWidth}
      variant={variant}
      shape={shape}
      color={color}
      size={size}
      onClick={onClick}
      disabled={isDisabled}
      className={className}
      data-testid={testId}
    >
      {centerIcon ? (
        <Icon size={iconSize} stroke={setColor()} {...centerIcon} />
      ) : (
        <>
          {startIcon && (
            <Icon size={iconSize} stroke={setColor()} {...startIcon} />
          )}
          {text && <Typography as="span">{text}</Typography>}
          {isLoading && <Spinner size={size} color={setColor()} />}
          {endIcon && <Icon size={iconSize} stroke={setColor()} {...endIcon} />}
        </>
      )}
    </StyledButton>
  );
};

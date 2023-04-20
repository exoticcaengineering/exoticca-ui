import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton, Wrapper } from './Button.styles';
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
  color = 'white',
  onClick,
  shape = 'square',
  startIcon,
  endIcon,
  centerIcon,
  state,
  variant = 'primary',
  className,
  testId,
  originalIconColor,
}) => {
  const setColor = () => {
    if (variant === 'tertiary') return setTertiaryColor(color);
    return setContainColor(color);
  };

  const iconSize = getIconSize(size);

  return (
    <StyledButton
      variant={variant}
      shape={shape}
      color={color}
      size={size}
      onClick={onClick}
      disabled={state === 'disabled'}
      className={className}
      data-testid={testId}
    >
      {centerIcon ? (
        <Icon
          size={iconSize}
          icon={centerIcon}
          stroke={setColor()}
          originalIconColor={originalIconColor}
        />
      ) : (
        <Wrapper>
          {startIcon && (
            <Icon
              size={iconSize}
              icon={startIcon}
              stroke={setColor()}
              originalIconColor={originalIconColor}
            />
          )}
          {text && <Typography as="span">{text}</Typography>}
          {state === 'loading' && <Spinner size={size} color={setColor()} />}
          {endIcon && (
            <Icon
              size={iconSize}
              icon={endIcon}
              stroke={setColor()}
              originalIconColor={originalIconColor}
            />
          )}
        </Wrapper>
      )}
    </StyledButton>
  );
};

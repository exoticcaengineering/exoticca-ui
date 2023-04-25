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
        <Icon size={iconSize} stroke={setColor()} {...centerIcon} />
      ) : (
        <>
          {startIcon && (
            <Icon size={iconSize} stroke={setColor()} {...startIcon} />
          )}
          {text && <Typography as="span">{text}</Typography>}
          {state === 'loading' && <Spinner size={size} color={setColor()} />}
          {endIcon && <Icon size={iconSize} stroke={setColor()} {...endIcon} />}
        </>
      )}
    </StyledButton>
  );
};

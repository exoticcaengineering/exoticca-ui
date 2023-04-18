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
  leftIcon,
  rightIcon,
  centerIcon,
  state,
  variant = 'primary',
  className,
  testId,
}) => {
  const setColor = () => {
    if (variant === 'tertiary') setTertiaryColor(color);
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
        <Icon size={iconSize} icon={centerIcon} stroke={setColor()} />
      ) : (
        <Wrapper>
          {leftIcon && (
            <Icon size={iconSize} icon={leftIcon} stroke={setColor()} />
          )}
          {text && <Typography as="span">{text}</Typography>}
          {state === 'loading' && <Spinner size={size} color={setColor()} />}
          {rightIcon && (
            <Icon size={iconSize} icon={rightIcon} stroke={setColor()} />
          )}
        </Wrapper>
      )}
    </StyledButton>
  );
};

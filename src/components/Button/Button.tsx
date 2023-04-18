import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton, Wrapper } from './Button.styles';
import { Icon } from '../Icon/Icon';
import { Spinner } from './Spinner';
import { setContainColor, setTertiaryColor } from './Button.helpers';

export const Button: FC<Props> = ({
  text,
  size,
  color,
  onClick,
  shape,
  leftIcon,
  rightIcon,
  centerIcon,
  state,
  variant,
}) => {
  const setColor = () => {
    if (variant === 'tertiary') setTertiaryColor(color);
    return setContainColor(color);
  };

  return (
    <StyledButton
      variant={variant}
      shape={shape}
      color={color}
      size={size}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {centerIcon ? (
        <Icon size="regular" icon={centerIcon} stroke={setColor()} />
      ) : (
        <Wrapper>
          {rightIcon && (
            <Icon size="regular" icon={rightIcon} stroke={setColor()} />
          )}
          {text && text}
          {state === 'loading' && <Spinner size={size} color={setColor()} />}
          {leftIcon && (
            <Icon size="regular" icon={leftIcon} stroke={setColor()} />
          )}
        </Wrapper>
      )}
    </StyledButton>
  );
};

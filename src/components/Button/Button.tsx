import { FC } from 'react';
import { Props } from './Button.types';
import {
  StyledButton,
  Wrapper,
  setContainColor,
  setTertiaryColor,
} from './Button.styles';
import { Icon } from '../Icon/Icon';
import { Spinner } from './Spinner';
import { useTheme } from 'styled-components';

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
  const theme = useTheme();

  const setColor = () => {
    let settedColor;
    if (variant === 'tertiary') {
      settedColor = setTertiaryColor(theme, color);
    } else {
      settedColor = setContainColor(theme, color);
    }
    return settedColor === '#ffffff' ? 'white' : 'black';
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

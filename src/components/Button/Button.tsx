import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton } from './Button.styles';
import { getIconSize } from './Button.helpers';
import { Typography } from '../Typography';
import { Spinner } from '../Spinner/Spinner';

export const Button: FC<Props> = ({
  text,
  size = 'medium',
  color = 'primary',
  onClick,
  shape = 'rounded',
  startIcon,
  endIcon,
  variant = 'primary',
  className,
  testId,
  isLoading,
  isDisabled,
  fullWidth,
  ...props
}) => {
  const iconSize = getIconSize(size);

  const hasIcon = startIcon || endIcon;

  const renderLoadingIcon = () => (
    <Spinner size={iconSize} color="currentColor" />
  );

  const renderStartIcon = () => {
    if (!startIcon) return;
    if (isLoading) return renderLoadingIcon();
    return startIcon;
  };

  const renderEndIcon = () => {
    if (!endIcon) return;
    if (isLoading) return renderLoadingIcon();
    return endIcon;
  };

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isLoading) return;
    onClick?.(e);
  };

  return (
    <StyledButton
      fullWidth={fullWidth}
      variant={variant}
      shape={shape}
      color={color}
      size={size}
      onClick={handleOnClick}
      disabled={isDisabled}
      className={className}
      data-testid={testId}
      {...props}
    >
      {renderStartIcon()}
      {text && <Typography as="span">{text}</Typography>}
      {!hasIcon && isLoading && renderLoadingIcon()}
      {renderEndIcon()}
    </StyledButton>
  );
};

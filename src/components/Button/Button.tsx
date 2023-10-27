import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton, StyledIcon } from './Button.styles';
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
}) => {
  const iconSize = getIconSize(size);

  const hasIcon = startIcon || endIcon;

  const renderLoadingIcon = () => (
    <Spinner size={iconSize} color="currentColor" />
  );

  const renderStartIcon = () => {
    if (!startIcon) return;
    if (isLoading) return renderLoadingIcon();
    return <StyledIcon size={iconSize} stroke="currentColor" {...startIcon} />;
  };

  const renderEndIcon = () => {
    if (!endIcon) return;
    if (isLoading) return renderLoadingIcon();
    return <StyledIcon size={iconSize} stroke="currentColor" {...endIcon} />;
  };

  const handleOnClick: React.MouseEventHandler = (e) => {
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
    >
      {renderStartIcon()}
      {text && <Typography as="span">{text}</Typography>}
      {!hasIcon && isLoading && renderLoadingIcon()}
      {renderEndIcon()}
    </StyledButton>
  );
};

import { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton } from './Button.styles';
import { Icon } from '../Icon/Icon';
import { Spinner } from './Spinner';
import { getIconSize } from './Button.helpers';
import { Typography } from '../Typography';

export const Button: FC<Props> = ({
  text,
  size = 'medium',
  color = 'primary',
  onClick,
  shape = 'square',
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

  const renderLoadingIcon = () => <Spinner size={size} color="currentColor" />;

  const renderStartIcon = () => {
    if (!startIcon) return;
    if (isLoading) return renderLoadingIcon();
    return <Icon size={iconSize} stroke="currentColor" {...startIcon} />;
  };

  const renderEndIcon = () => {
    if (!endIcon) return;
    if (isLoading) return renderLoadingIcon();
    return <Icon size={iconSize} stroke="currentColor" {...endIcon} />;
  };

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
      {renderStartIcon()}
      {text && <Typography as="span">{text}</Typography>}
      {!hasIcon && isLoading && renderLoadingIcon()}
      {renderEndIcon()}
    </StyledButton>
  );
};

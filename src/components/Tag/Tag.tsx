import { FC } from 'react';
import { Props } from './Tag.types';
import { StyledWrapper } from './Tag.styles';
import { TextCaption } from 'src/components/TypographyVariants';
import { Icon } from 'src/components/Icon';

export const Tag: FC<Props> = ({
  text,
  size = 'small',
  color = 'primary',
  shade = 'main',
  variant = 'primary',
  className,
  testId = 'tag',
  shape = 'rounded',
  startIcon,
  endIcon,
}) => {
  const renderText = () => {
    if (size === 'small') {
      return <TextCaption align="center">{text}</TextCaption>;
    }
  };
  return (
    <StyledWrapper
      size={size}
      color={color}
      shade={shade}
      variant={variant}
      className={className}
      data-testid={testId}
      shape={shape}
    >
      {startIcon && (
        <Icon size="regular" stroke="currentColor" {...startIcon} />
      )}
      {renderText()}
      {endIcon && <Icon size="regular" stroke="currentColor" {...endIcon} />}
    </StyledWrapper>
  );
};

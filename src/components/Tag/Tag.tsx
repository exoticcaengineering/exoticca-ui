import { FC } from 'react';
import { Props } from './Tag.types';
import { TextCaption } from 'src/components/TypographyVariants';
import { StyledWrapper } from './Tag.styles';

export const Tag: FC<Props> = ({
  text,
  textColor = 'polarNight',
  size = 'small',
  color = 'arcticWind',
  variant = 'contained',
  className,
  testId,
}) => {
  const renderText = () => {
    if (size === 'small') {
      return <TextCaption color={textColor}>{text}</TextCaption>;
    }
  };
  return (
    <StyledWrapper
      size={size}
      color={color}
      variant={variant}
      className={className}
      testId={testId}
    >
      {renderText()}
    </StyledWrapper>
  );
};

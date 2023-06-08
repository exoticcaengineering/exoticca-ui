import { FC } from 'react';
import { Props } from './Tag.types';
import { StyledWrapper } from './Tag.styles';
import { TextCaption } from 'src/components/TypographyVariants';

export const Tag: FC<Props> = ({
  text,
  size = 'small',
  color = 'primary',
  variant = 'primary',
  className,
  testId = 'tag',
}) => {
  const renderText = () => {
    if (size === 'small') {
      return <TextCaption>{text}</TextCaption>;
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

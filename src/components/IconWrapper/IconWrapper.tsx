import { FC } from 'react';
import { StyledWrapper } from './IconWrapper.styles';
import { Props } from './IconWrapper.types';

export const IconWrapper: FC<Props> = ({
  icon,
  testId,
  children,
  ...props
}) => {
  const defaultTestId = `${icon}-icon`;
  const isClickable = !!props.onClick;

  return (
    <StyledWrapper
      data-testid={testId || defaultTestId}
      isClickable={isClickable}
      {...props}
    >
      {children}
    </StyledWrapper>
  );
};

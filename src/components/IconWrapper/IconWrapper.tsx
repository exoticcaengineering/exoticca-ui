import { FC } from 'react';
import { StyledWrapper } from './IconWrapper.styles';
import { Props } from './IconWrapper.types';

export const IconWrapper: FC<Props> = ({ testId, children, ...props }) => {
  const isClickable = !!props.onClick;

  return (
    <StyledWrapper data-testid={testId} isClickable={isClickable} {...props}>
      {children}
    </StyledWrapper>
  );
};

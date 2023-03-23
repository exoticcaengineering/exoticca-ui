import { forwardRef } from 'react';
import { StyledBoxWrapper } from './Box.styles';
import { Props } from './Box.types';

export const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, testId, className, ...props }, ref) => {
    return (
      <StyledBoxWrapper
        className={className}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        {children}
      </StyledBoxWrapper>
    );
  },
);

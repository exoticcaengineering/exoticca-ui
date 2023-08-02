import { forwardRef } from 'react';
import { StyledBoxWrapper } from './Box.styles';
import { Props } from './Box.types';

export const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, testId, className, ...props }, ref) => {
    const isClickable = Boolean(props.onClick);

    return (
      <StyledBoxWrapper
        className={className}
        data-testid={testId}
        ref={ref}
        isClickable={isClickable}
        {...props}
      >
        {children}
      </StyledBoxWrapper>
    );
  },
);

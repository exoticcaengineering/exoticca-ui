import { forwardRef } from 'react';
import { StyledBoxWrapper } from './Box.styles';
import { Props } from './Box.types';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from 'src/themes';
import { withThemeProvider } from 'src/utils/withThemeProvider';

export const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, testId, className, ...props }, ref) => {
    return (
      <ThemeProvider theme={themeDefault}>
      <StyledBoxWrapper
        className={className}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        {children}
      </StyledBoxWrapper>
      </ThemeProvider>
    );
  },
);



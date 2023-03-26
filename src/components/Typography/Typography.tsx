import { FC } from 'react';
import { withThemeProvider } from 'src/utils/withThemeProvider';
import { StyledTypographyContainer } from './Typography.styles';
import { Props } from './Typography.types';

export const Typography: FC<Props> = ({
  children,
  as = 'p',
  testId,
  className,
  ...props
}) => {
  return (
    <StyledTypographyContainer
      className={className}
      data-testid={testId}
      as={as}
      {...props}
    >
      {children}
    </StyledTypographyContainer>
  );
};


export default withThemeProvider(Typography)
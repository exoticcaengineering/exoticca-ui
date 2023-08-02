import { FC } from 'react';

import { StyledTypographyContainer } from './Typography.styles';
import { Props } from './Typography.types';

export const Typography: FC<Props> = ({
  children,
  testId,
  className,
  ...props
}) => {
  const isClickable = !!props.onClick;
  return (
    <StyledTypographyContainer
      className={className}
      data-testid={testId}
      isClickable={isClickable}
      {...props}
    >
      {children}
    </StyledTypographyContainer>
  );
};

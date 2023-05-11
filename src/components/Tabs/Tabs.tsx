import { FC } from 'react';
import { Props } from './Tabs.types';
import { StyledWrapper } from './Tabs.styles';

export const Tabs: FC<Props> = ({ children, className, testId = 'tabs' }) => {
  return (
    <StyledWrapper className={className} data-testid={testId}>
      {children}
    </StyledWrapper>
  );
};

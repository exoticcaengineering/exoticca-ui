import { FC } from 'react';
import { Props } from './Tab.types';
import { StyledWrapper } from './Tab.styles';

export const Tab: FC<Props> = ({
  children,
  isSelected,
  onClick,
  className,
  testId = 'tab',
}) => {
  return (
    <StyledWrapper
      onClick={onClick}
      isSelected={isSelected}
      className={className}
      data-testid={testId}
    >
      {children}
    </StyledWrapper>
  );
};

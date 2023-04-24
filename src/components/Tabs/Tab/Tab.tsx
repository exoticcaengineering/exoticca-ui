import { FC } from 'react';
import { Props } from './Tab.types';
import { StyledWrapper } from './Tab.styles';

export const Tab: FC<Props> = ({ children, isSelected, onClick }) => {
  return (
    <StyledWrapper onClick={onClick} isSelected={isSelected}>
      {children}
    </StyledWrapper>
  );
};

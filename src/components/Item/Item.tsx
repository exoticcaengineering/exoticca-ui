import { FC } from 'react';
import { Props } from './Item.types';
import { StyledWrapper } from './Item.styles';

export const Item: FC<Props> = ({ className, hover, children }) => {
  return (
    <StyledWrapper className={className} hover={hover}>
      {children}
    </StyledWrapper>
  );
};

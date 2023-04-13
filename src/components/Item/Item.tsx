import { FC } from 'react';
import { Props } from './Item.types';
import { StyledWrapper } from './Item.styles';

export const Item: FC<Props> = ({
  className,
  hover,
  children,
  color,
  selected,
}) => {
  return (
    <StyledWrapper
      selected={selected}
      className={className}
      hover={hover}
      color={color}
    >
      {children}
    </StyledWrapper>
  );
};

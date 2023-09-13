import { FC } from 'react';
import { StyledFlexWrapper } from 'src/components/Flex/Flex.styles';
import { Props } from 'src/components/Flex/Flex.types';

export const Flex: FC<Props> = ({
  children,
  direction = 'row',
  items = 'flex-start',
  justify = 'flex-start',
  gap = 0,
  ...props
}) => {
  return (
    <StyledFlexWrapper
      direction={direction}
      items={items}
      justify={justify}
      gap={gap}
      {...props}
    >
      {children}
    </StyledFlexWrapper>
  );
};

import { FC } from 'react';
import { StyledFlexWrapper } from 'src/components/Flex/Flex.styles';
import { Props } from 'src/components/Flex/Flex.types';

export const Flex: FC<Props> = ({
  children,
  direction = 'row',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  gap = 0,
  as,
  ...props
}) => {
  return (
    <StyledFlexWrapper
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      forwardedAs={as}
      {...props}
    >
      {children}
    </StyledFlexWrapper>
  );
};

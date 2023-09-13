import { Box } from 'src/components/Box';
import { StyledProps } from 'src/components/Flex/Flex.types';
import styled from 'styled-components';

export const StyledFlexWrapper = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ items }) => items};
  justify-content: ${({ justify }) => justify};
  gap: ${({ theme, gap }) => theme.spacing(gap)};

  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    flex-direction: column;
  }
`;

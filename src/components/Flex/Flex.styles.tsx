import { Box } from 'src/components/Box';
import { StyledProps } from 'src/components/Flex/Flex.types';
import styled from 'styled-components';

export const StyledFlexWrapper = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ theme, gap = 0 }) => theme.spacing(gap)};
`;

import { Box } from 'src/components/Box';
import styled, { Duration, keyframes } from 'styled-components';

const move = keyframes`
 0% { left: 0px; }
 100% { left: 100%; }
`;

export const StyledColorBlock = styled(Box)`
  width: 200px;
  height: 40px;
`;

export const StyledColorBlockTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledColorWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
`;

export const StyledAnimationDot = styled.div<{ durationKey: keyof Duration }>`
  width: 25px;
  height: 25px;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background: ${({ theme }) => theme.colors.elfGreen};
  position: relative;
  left: 0px;
  animation-duration: ${({ theme, durationKey }) =>
    theme.transition.duration[durationKey]};
  animation-name: ${move};
  animation-iteration-count: 0;
`;

export const StyledDurationWrapper = styled(Box)`
  cursor: pointer;
  &:hover {
    ${StyledAnimationDot} {
      animation-iteration-count: infinite;
    }
  }
`;

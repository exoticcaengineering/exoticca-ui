import styled from 'styled-components';
import { Box } from 'src/components/Box';
import { StyledProps } from './LandingBox.types';

export const StyledWrapper = styled(Box)<StyledProps>`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background: ${({ theme, topLineColor = 'grey80' }) =>
      theme.colors[topLineColor]};
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(4, 3, 4, 3)};
    &:before {
      width: 35px;
    }
  }
  @media (min-width: ${({ theme }) => theme.newBreakpoints.desktop}) {
    &:before {
      width: 82px;
    }
  }
`;

import styled from 'styled-components';
import { Box } from 'src/components/Box';
import { StyledProps } from './Header.types';

export const StyledHeaderWrapper = styled(Box).attrs({
  borderRadius: 'none',
  role: 'heading',
  ariaLevel: '1',
})<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: ${({ theme, background = 'header', backgroundShade = 'main' }) =>
    theme.palette[background][backgroundShade]};
  padding: ${({ theme }) => theme.spacing(1, 3)};
  transition: background-color
    ${({ theme }) => theme.transition.duration.standard};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    height: 70px;
  }
`;

export const StyledHeaderContent = styled.div<StyledProps>`
  color: ${({ theme, background = 'header' }) =>
    theme.palette[background].contrast};
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 0;
`;

export const StyledLeftContent = styled(StyledHeaderContent)``;
export const StyledCenterContent = styled(StyledHeaderContent)`
  flex-grow: 0;
`;

export const StyledRightContent = styled(StyledHeaderContent)`
  display: flex;
  justify-content: flex-end;
`;

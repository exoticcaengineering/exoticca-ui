import styled from 'src/utils/styled';
import { Box } from 'src/components/Box';
import { StyledProps } from './Header.types';

export const StyledHeaderWrapper = styled(Box).attrs({
  borderRadius: 'none',
})<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: ${({ theme, backgroundType }) =>
    backgroundType === 'solid'
      ? theme.colors.polarNight
      : theme.colors.transparent};
  padding: ${({ theme }) => theme.spacing(1, 3)};
  transition: background-color
    ${({ theme }) => theme.transition.duration.standard};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    height: 70px;
  }
`;

export const StyledHeaderContent = styled(Box)`
  color: ${({ theme }) => theme.colors.arcticWind};
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

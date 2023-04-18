import styled from 'src/utils/styled';
import { Box } from 'src/components/Box';
import { StyledProps } from './Header.types';

export const StyledHeaderWrapper = styled(Box)<StyledProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 59px;
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
  flex: 1 0 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLeftContent = styled(StyledHeaderContent)``;
export const StyledCenterContent = styled(StyledHeaderContent)`
  display: flex;
  justify-content: center;
`;

export const StyledRightContent = styled(StyledHeaderContent)`
  display: flex;
  justify-content: flex-end;
`;

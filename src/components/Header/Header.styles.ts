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
  padding: ${({ theme }) => theme.spacing(0, 3)};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    height: 70px;
  }
`;

export const StyledHeaderContent = styled(Box)`
  color: ${({ theme }) => theme.colors.arcticWind};
  flex: 1 0 0;
`;

export const StyledLeftContent = styled(StyledHeaderContent)``;
export const StyledCenterContent = styled(StyledHeaderContent)`
  text-align: center;
`;

export const StyledRightContent = styled(StyledHeaderContent)`
  text-align: right;
`;

import styled from 'src/utils/styled';
import { StyledProps } from './Tabs.types';
import { Theme } from 'src/types';

const borderSize = '2.5px';

const setBorderBottom = (theme: Theme) =>
  `${borderSize} solid ${theme.colors.polarNight}`;

export const StyledTabs = styled.ul`
  all: unset;
  display: flex;
`;

export const StyledTitleWrapper = styled.li<StyledProps>`
  all: unset;
  display: block;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  border-bottom: ${({ theme, isSelected }) =>
    isSelected && setBorderBottom(theme)};
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.arcticWind : theme.colors.polarNightLight};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.polarNight : theme.colors.polarNightMedium};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  flex: 1 0 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-bottom: ${({ theme }) => setBorderBottom(theme)};
  }
`;

export const StyledContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

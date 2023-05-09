import styled from 'src/utils/styled';
import { StyledProps } from './Tab.types';
import { Theme } from 'src/types';

const borderSize = '2.5px';

const setBorderBottom = (theme: Theme) =>
  `${borderSize} solid ${theme.colors.polarNight}`;

export const StyledWrapper = styled.li<StyledProps>`
  display: table-cell;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.arcticWind : theme.colors.polarNightLight};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border-bottom: ${({ theme, isSelected }) =>
    isSelected && setBorderBottom(theme)};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.polarNight : theme.colors.polarNightMedium};

  &:hover {
    border-bottom: ${({ theme }) => setBorderBottom(theme)};
  }
`;

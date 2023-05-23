import styled from 'styled-components';
import { StyledProps } from './Tab.types';
import { Theme } from 'src/types';

const borderSize = '3px';

const setBorderBottom = (theme: Theme) =>
  `${borderSize} solid ${theme.colors.polarNight}`;

export const StyledWrapper = styled.li<StyledProps>`
  display: table-cell;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border-bottom: ${({ theme, isSelected }) =>
    isSelected
      ? setBorderBottom(theme)
      : `1px solid ${theme.colors.polarNightMedium}`};
  color: ${({ theme }) => theme.colors.polarNight};

  &:hover {
    border-bottom: ${({ theme }) => setBorderBottom(theme)};
  }
`;

import styled from 'src/utils/styled';
import { StyledProps } from './Tab.types';
import { Theme } from 'src/types';

const borderSize = '2.5px';

const borderBottom = (theme: Theme) =>
  `${borderSize} solid ${theme.colors.polarNight}`;

export const StyledWrapper = styled.li<StyledProps>`
  display: table-cell;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  border-bottom: ${({ theme, isSelected }) =>
    isSelected && borderBottom(theme)};

  &:hover {
    border-bottom: ${({ theme }) => borderBottom(theme)};
  }
`;

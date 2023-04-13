import styled from 'src/utils/styled';
import { StyledProps } from './Item.types';

const setColor = (selected, theme, color) => {
  if (selected) return theme.colors.arcticWind;
  if (color) return theme.colors[color];
  return theme.colors.polarNight;
};

export const StyledWrapper = styled.li<StyledProps>`
  height: fit-content;
  width: 100%;
  cursor: pointer;
  list-style-type: none;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  border-radius: ${({ theme }) => theme.newBorderRadius.xs};
  font-family: ${({ theme }) =>
    `${theme.typography.fontFamily.newBranding} !important`};
  color: ${({ theme, color, selected }) => setColor(selected, theme, color)};
  background: ${({ theme, selected }) => selected && theme.colors.polarNight};

  &:hover {
    text-decoration: ${({ hover }) =>
      (hover === 'underlined' || hover === 'underlined-bold') && 'underline'};
    text-decoration-thickness: ${({ hover }) =>
      hover === 'underlined-bold' && '0.2rem'};
    background: ${({ theme, hover, selected }) =>
      hover === 'background' && !selected && theme.colors.polarNightLight};
  }
`;

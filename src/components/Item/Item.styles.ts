import styled from 'styled-components';
import { SetColorParams, StyledProps } from './Item.types';
import { getPaddingBySize } from './Item.helper';

const setColor = ({ selected, theme, color }: SetColorParams) => {
  if (selected) return theme.colors.arcticWind;
  if (color) return theme.colors[color];
  return theme.colors.polarNight;
};

export const StyledWrapper = styled.li<StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
  justify-content: ${({ layout = 'flex-start' }) => layout};
  height: fit-content;
  width: 100%;
  cursor: pointer;
  list-style-type: none;
  padding: ${({ theme, size = 'medium' }) => getPaddingBySize(theme, size)};
  border-radius: ${({ theme }) => theme.newBorderRadius.xs};
  font-family: ${({ theme }) =>
    `${theme.typography.fontFamily.newBranding} !important`};
  color: ${({ theme, color = 'polarNight', selected }) =>
    setColor({ selected, theme, color })};
  background: ${({ theme, selected }) => selected && theme.colors.polarNight};

  &:hover {
    text-decoration: ${({ hover = 'underlined' }) =>
      (hover === 'underlined' || hover === 'underlined-bold') && 'underline'};
    text-decoration-thickness: ${({ hover }) =>
      hover === 'underlined-bold' && '3px'};
    background: ${({ theme, hover, selected }) =>
      hover === 'background' && !selected && theme.colors.polarNightLight};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

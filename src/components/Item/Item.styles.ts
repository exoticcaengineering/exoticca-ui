import styled from 'src/utils/styled';
import { StyledProps } from './Item.types';

export const StyledWrapper = styled.li<StyledProps>`
  width: 100%;
  cursor: pointer;
  list-style-type: none;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.newBorderRadius.m};
  font-family: ${({ theme }) =>
    `${theme.typography.fontFamily.newBranding} !important`};

  &:hover {
    text-decoration: ${({ hover }) =>
      (hover === 'underlined' || hover === 'underlined-bold') && 'underline'};
    text-decoration-thickness: ${({ hover }) =>
      hover === 'underlined-bold' && '0.2rem'};
    background: ${({ theme, hover }) =>
      hover === 'background' && theme.colors.polarNight};
    color: ${({ theme, hover }) =>
      hover === 'background' && theme.colors.arcticWind};
  }
`;

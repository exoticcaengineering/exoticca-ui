import styled from 'styled-components';
import { Box } from 'src/components/Box';
import { StyledProps } from './Tag.types';

export const StyledWrapper = styled(Box)<StyledProps>`
  display: inline-block;
  padding: ${({ theme, size }) => {
    if (size === 'small') return theme.spacing(0.75, 1);
  }};
  background: ${({ theme, color = 'arcticWind', variant }) => {
    if (variant === 'contained') return theme.colors[color];
    return theme.colors.white;
  }};
  border-radius: ${({ theme }) => theme.newBorderRadius.semiRounded};
  border: 1px solid
    ${({ theme, color = 'arcticWind', variant }) => {
      if (variant === 'outlined') return theme.colors[color];
      return theme.colors.transparent;
    }};
`;

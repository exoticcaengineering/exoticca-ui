import styled from 'styled-components';
import { Box } from 'src/components/Box';
import { StyledProps } from './Tag.types';

export const StyledWrapper = styled(Box)<StyledProps>`
  display: inline-block;
  padding: ${({ theme, size }) => {
    if (size === 'small') return theme.spacing(0.75, 1);
  }};
  background: ${({ theme, color = 'primary', variant }) => {
    if (variant === 'primary') return theme.palette[color].main;
    return 'transparent';
  }};
  border-radius: ${({ theme }) => theme.newBorderRadius.semiRounded};
  border: 1px solid
    ${({ theme, color = 'primary', variant }) => {
      if (variant === 'primary') return 'transparent';
      return theme.palette[color].main;
    }};
  color: ${({ theme, color = 'primary', variant }) => {
    if (variant === 'primary') return theme.palette[color].contrast;
    return theme.palette.background.contrast;
  }};
`;

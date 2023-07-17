import styled from 'styled-components';
import { StyledProps } from './Tag.types';

export const StyledWrapper = styled.div<StyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme, size }) => {
    if (size === 'small') return theme.spacing(0.75, 1);
  }};
  background: ${({ theme, color = 'primary', variant }) => {
    if (variant === 'primary') return theme.palette[color].main;
    return 'transparent';
  }};
  border-radius: ${({ theme, shape = 'rounded' }) => {
    if (shape === 'rounded') return theme.tag.borderRadius.rounded;
    return theme.tag.borderRadius.square;
  }};
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

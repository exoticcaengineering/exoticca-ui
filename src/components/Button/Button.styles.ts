import { keyframes } from 'src/utils/styled';
import { StyledProps } from './Button.types';
import { colorWithOpacity } from 'src/utils/getColorWithOpacity';
import {
  setColor,
  setContainColor,
  setFontsize,
  setSize,
  setTertiaryColor,
} from './Button.helpers';
import styled from 'src/utils/styled';

export const StyledButton = styled.button<StyledProps>`
  background-color: ${({ theme, color = 'white', variant }) =>
    variant === 'tertiary' ? 'transparent' : setColor(theme, color)};
  color: ${({ theme, color = 'white', variant }) =>
    variant === 'tertiary'
      ? theme.colors[setTertiaryColor(color)]
      : theme.colors[setContainColor(color)]};
  border-radius: ${({ shape, theme }) =>
    shape === 'rounded'
      ? theme.newBorderRadius.semiRounded
      : theme.newBorderRadius.m};
  padding: ${({ theme, size = 'medium' }) => setSize(theme)[size]};
  font-size: ${({ theme, size = 'medium' }) => setFontsize(theme)[size]};
  border: ${({ theme, color = 'white', variant }) =>
    variant === 'secondary'
      ? `3px solid ${theme.colors[setContainColor(color)]}`
      : 'none'};
  white-space: nowrap;
  &:hover {
    background-color: ${({ theme, color = 'white' }) =>
      colorWithOpacity(setColor(theme, color), 80)};
  }

  &:disabled {
    background-color: ${({ theme, color = 'white' }) =>
      colorWithOpacity(setColor(theme, color), 20)};
    color: ${({ theme }) => theme.colors.polarNightMedium};
    border: 0.15rem solid ${({ theme }) => theme.colors.polarNightMedium};
    cursor: not-allowed;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Animation = styled.div<{ size: number }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  transform-origin: center;
`;

import { keyframes } from 'styled-components';
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
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
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
  padding: ${({ theme, size = 'medium' }) => setSize(theme, size)};
  font-size: ${({ theme, size = 'medium' }) => setFontsize(theme, size)};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, color = 'white', variant }) =>
    variant === 'secondary'
      ? theme.colors[setContainColor(color)]
      : theme.colors.transparent};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  &:hover {
    background-color: ${({ theme, color = 'white' }) =>
      colorWithOpacity(setColor(theme, color), 80)};
  }

  &:disabled {
    background-color: ${({ theme, color = 'white' }) =>
      colorWithOpacity(setColor(theme, color), 20)};
    color: ${({ theme }) => theme.colors.polarNightMedium};
    border-color: ${({ theme }) => theme.colors.polarNightMedium};
    cursor: not-allowed;
  }
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

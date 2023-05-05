import { css, keyframes } from 'styled-components';
import { StyledProps } from './Button.types';
import { colorWithOpacity } from 'src/utils/getColorWithOpacity';
import {
  getIconButtonSize,
  setBackgroundColor,
  setTextColor,
  setFontsize,
  setPadding,
  mapButtonColorToThemeColor,
} from './Button.helpers';
import styled from 'src/utils/styled';

const buttonCommonStyle = css<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme, color = 'black', variant = 'primary' }) =>
    theme.colors[setBackgroundColor(theme, variant, color)]};
  color: ${({ theme, color = 'black', variant = 'primary' }) =>
    theme.colors[setTextColor(variant, color)]};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, color = 'black', variant = 'primary' }) => {
    if (variant === 'secondary')
      return theme.colors[setTextColor(variant, color)];
    return theme.colors.transparent;
  }};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, color = 'black' }) =>
      colorWithOpacity(theme.colors[mapButtonColorToThemeColor(color)], 80)};
  }
  &:disabled {
    background-color: ${({ theme, color = 'black' }) =>
      colorWithOpacity(theme.colors[mapButtonColorToThemeColor(color)], 20)};
    color: ${({ theme }) => theme.colors.polarNightMedium};
    border-color: ${({ theme }) => theme.colors.polarNightMedium};
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<StyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: ${({ shape, theme }) =>
    shape === 'rounded'
      ? theme.newBorderRadius.semiRounded
      : theme.newBorderRadius.m};
  padding: ${({ theme, size = 'medium' }) => setPadding(theme, size)};
  font-size: ${({ theme, size = 'medium' }) => setFontsize(theme, size)};
  white-space: nowrap;
  ${buttonCommonStyle}
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

export const StyledIconButtonWrapper = styled.button<StyledProps>`
  width: ${({ size = 'medium' }) => getIconButtonSize(size)};
  height: ${({ size = 'medium' }) => getIconButtonSize(size)};
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  ${buttonCommonStyle}
`;

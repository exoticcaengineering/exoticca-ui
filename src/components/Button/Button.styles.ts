import styled, { css, keyframes } from 'styled-components';
import { StyledProps } from './Button.types';
import { colorWithOpacity } from 'src/utils/getColorWithOpacity';
import {
  getIconButtonSize,
  setBackgroundColor,
  setTextColor,
  setFontsize,
  setPadding,
  setBorderColor,
  setDisabledBorderColor,
  setFocusBoxShadowColor,
  setFocusBorderColor,
  setHoverBackgroundColor,
  setDisabledBackgroundColor,
} from './Button.helpers';

const buttonCommonStyle = css<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme, color = 'polarNight', variant = 'primary' }) =>
    theme.colors[setBackgroundColor(variant, color)]};
  color: ${({ theme, color = 'polarNight', variant = 'primary' }) =>
    theme.colors[setTextColor(variant, color)]};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, color = 'polarNight', variant = 'primary' }) =>
    theme.colors[setBorderColor(variant, color)]};
  cursor: pointer;
  &:hover {
    background-color: ${({
      theme,
      color = 'polarNight',
      variant = 'primary',
    }) => theme.colors[setHoverBackgroundColor(variant, color)]};
  }
  &:disabled {
    background-color: ${({
      theme,
      color = 'polarNight',
      variant = 'primary',
    }) => theme.colors[setDisabledBackgroundColor(variant, color)]};
    color: ${({ theme }) => theme.colors.polarNightMedium};
    border-color: ${({ theme, variant = 'primary' }) =>
      theme.colors[setDisabledBorderColor(variant)]};
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ theme, variant = 'primary', color = 'polarNight' }) => {
        const shadowColor =
          theme.colors[setFocusBoxShadowColor(variant, color)];
        if (variant === 'secondary') return colorWithOpacity(shadowColor, 20);
        return shadowColor;
      }};
    border-color: ${({ theme, variant = 'primary', color = 'polarNight' }) =>
      theme.colors[setFocusBorderColor(variant, color)]};
  }
`;

export const StyledButton = styled.button<StyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: ${({ shape, theme }) =>
    shape === 'rounded'
      ? theme.newBorderRadius.semiRounded
      : theme.newBorderRadius.s};
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
  all: unset;
  width: ${({ size = 'medium' }) => getIconButtonSize(size)};
  height: ${({ size = 'medium' }) => getIconButtonSize(size)};
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  ${buttonCommonStyle}
`;

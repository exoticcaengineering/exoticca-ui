import styled, { css, keyframes } from 'styled-components';
import { StyledProps } from './Button.types';
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
  setFocusBackgroundColor,
} from './Button.helpers';
import { Icon } from 'src/components/Icon';

const buttonCommonStyle = css<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme, color, variant }) =>
    setBackgroundColor({ theme, variant, color })};

  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, color, variant }) =>
    setBorderColor({ theme, variant, color })};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, color, variant }) =>
      setHoverBackgroundColor({ theme, variant, color })};
  }
  &:disabled {
    background-color: ${({ theme, color, variant }) =>
      setDisabledBackgroundColor({ theme, variant, color })};
    color: ${({ theme }) => theme.colors.polarNightMedium};
    border-color: ${({ theme, variant = 'primary' }) =>
      theme.colors[setDisabledBorderColor(variant)]};
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ theme, variant, color }) =>
        setFocusBoxShadowColor({ theme, variant, color })};
    border-color: ${({ theme, variant, color }) =>
      setFocusBorderColor({ theme, variant, color })};
    background-color: ${({ theme, color, variant }) =>
      setFocusBackgroundColor({ theme, variant, color })};
  }
`;

export const StyledButton = styled.button<StyledProps>`
  color: ${({ theme, color, variant }) =>
    setTextColor({ theme, variant, color })};
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

export const StyledIcon = styled(Icon)`
  flex-shrink: 0;
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
  box-sizing: border-box;
  color: ${({ theme, color, variant }) =>
    setTextColor({ theme, variant, color })};
  width: ${({ size = 'medium' }) => getIconButtonSize(size)};
  height: ${({ size = 'medium' }) => getIconButtonSize(size)};
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  ${buttonCommonStyle}
`;

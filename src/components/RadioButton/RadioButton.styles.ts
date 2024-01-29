import styled from 'styled-components';
import { StyledProps } from './RadioButton.types';

export const StyledRadioButtonWrapper = styled.div<StyledProps>`
  --disabled-color: ${({ theme }) => theme.palette.background.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme, disabled }) =>
    disabled ? 'var(--disabled-color)' : theme.palette.background.contrast};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

export const StyledRadioButton = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid currentColor;
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  background-color: ${({ theme, isChecked, disabled }) => {
    if (disabled && isChecked) return 'var(--disabled-color)';
    if (disabled) return theme.palette.background.main;
    if (isChecked) return theme.palette.primary.main;
    return theme.palette.background.main;
  }};
`;

export const StyledRadioButtonInner = styled.span<StyledProps>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  background-color: ${({ theme }) => theme.palette.background.main};
`;

export const StyledLabel = styled.label<StyledProps>`
  cursor: pointer;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
`;

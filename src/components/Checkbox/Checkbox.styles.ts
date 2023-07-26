import styled from 'styled-components';
import { StyledProps } from './Checkbox.types';
import { TextBody2 } from '../TypographyVariants';

export const StyledCheckboxWrapper = styled.label<StyledProps>`
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: ${({ theme }) => theme.spacing(1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ error, theme }) =>
    error ? theme.palette.warning.main : theme.palette.background.medium};
`;

export const StyledCheckBox = styled.span<StyledProps>`
  position: relative;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.newBorderRadius.xs};
  border: solid 1px
    ${({ error, theme }) =>
      error ? theme.palette.warning.main : 'currentColor'};

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 2px;
    width: 8px;
    height: 14px;
    border: solid ${({ theme }) => theme.palette.background.main};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const StyledInputCheckbox = styled.input.attrs({
  type: 'checkbox',
  hidden: true,
})<StyledProps>`
  &:checked ~ ${StyledCheckBox} {
    color: ${({ theme, error }) =>
      error ? theme.palette.warning.main : theme.palette.background.contrast};
    border-color: currentColor;
    background-color: currentColor;
  }

  &:checked ~ ${StyledCheckBox}:after {
    display: block;
  }
`;

export const StyledLabel = styled(TextBody2).attrs({
  forwardAs: 'span',
})`
  align-self: center;
`;

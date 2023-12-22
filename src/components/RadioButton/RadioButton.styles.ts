import styled from 'styled-components';
import { StyledProps } from './RadioButton.types';

export const StyledRadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledRadioButton = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.palette.background.contrast};
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  background-color: ${({ theme, isChecked }) =>
    isChecked
      ? theme.palette.background.contrast
      : theme.palette.background.main};
`;

export const StyledRadioButtonInner = styled.span<StyledProps>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.newBorderRadius.rounded};
  background-color: ${({ theme }) => theme.palette.background.main};
`;

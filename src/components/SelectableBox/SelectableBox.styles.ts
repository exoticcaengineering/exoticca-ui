import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { StyledProps } from './SelectableBox.types';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledBox = styled(Box)<StyledProps>`
  overflow: hidden;
  position: relative;
  height: 100%;
  transition: background-color
    ${({ theme }) => theme.transition.duration.shorter} ease-in-out;
  ${({ isClickable, isSelected }) =>
    isClickable &&
    !isSelected &&
    css`
      &:hover {
        background: ${({ theme }) => theme.palette.background.light};
      }
    `}
`;

export const SelectedIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(45deg) translate(-70%, 0%);
`;

export const StyledRecommendedTag = styled.div<StyledProps>`
  position: absolute;
  width: 50%;
  min-width: fit-content;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  background: ${({
    theme,
    highlightColor = 'promotion',
    highlightColorShade = 'main',
  }) => theme.palette[highlightColor][highlightColorShade]};
  padding: ${({ theme }) => theme.spacing(0.5, 3)};
  border-radius: ${({ theme }) => theme.newBorderRadius.m}
    ${({ theme }) => theme.newBorderRadius.m} 0 0;
  color: ${({ theme, highlightColor = 'promotion' }) =>
    theme.palette[highlightColor].contrast};
`;

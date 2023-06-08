import { Icon } from '../Icon/Icon';
import { Box } from '../Box';
import styled from 'styled-components';
import { StyledProps } from './Dropdown.types';
import {
  getBackgroundColor,
  getBorderColor,
  getColor,
  getPadding,
  getUnderLineBottomPosition,
  getUnderLineLeftRightPosition,
} from './Dropdown.helpers';

export const StyledDropdownWrapper = styled(Box)<StyledProps>`
  position: relative;
`;

export const StyledDropdownButton = styled.button<StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme, isOpen, inverseStyle }) =>
    theme.colors[getBorderColor({ isOpen, inverseStyle })]};
  border-bottom: none;
  border-radius: ${({ theme }) => theme.newBorderRadius.s};
  border-bottom-left-radius: ${({ theme }) => theme.newBorderRadius.none};
  border-bottom-right-radius: ${({ theme }) => theme.newBorderRadius.none};
  background-color: ${({ theme, isOpen, inverseStyle }) =>
    theme.colors[getBackgroundColor({ isOpen, inverseStyle })]};
  padding: ${({ theme, size = 'medium' }) => getPadding(theme, size)};
  color: ${({ theme, inverseStyle, isOpen }) =>
    theme.colors[getColor({ inverseStyle, isOpen })]};
  &:hover {
    &:after {
      content: '';
      position: absolute;
      bottom: ${({ size = 'medium' }) => getUnderLineBottomPosition(size)};
      left: ${({ size = 'medium' }) => getUnderLineLeftRightPosition(size)};
      right: ${({ size = 'medium' }) => getUnderLineLeftRightPosition(size)};
      height: 2px;
      background-color: currentColor;
    }
  }
`;

export const StyledDropdownList = styled(Box)<StyledProps>`
  position: absolute;
  min-width: 100%;
  animation: fadein ${({ theme }) => theme.transition.duration.shortest} linear;
  right: ${({ position }) => position === 'left' && '0'};
  border-color: ${({ theme, isOpen, inverseStyle }) =>
    theme.colors[getBorderColor({ isOpen, inverseStyle })]};
  border-top: none;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CloseIcon = styled(Icon)`
  cursor: pointer;
`;

export const CloseWrapper = styled.button<StyledProps>`
  all: unset;
  position: absolute;
  right: ${({ theme, position }) => position === 'right' && theme.spacing(1)};
  left: ${({ theme, position }) => position === 'left' && theme.spacing(1)};
  top: ${({ theme }) => theme.spacing(0.5)};
`;

export const StyledFirstPart = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
  overflow: hidden;
`;

export const StyledButtonTextWrapper = styled.div<StyledProps>`
  position: relative;
  overflow: hidden;
`;

export const StyledIcon = styled(Icon)`
  flex-shrink: 0;
`;

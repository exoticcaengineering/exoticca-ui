import { Box } from '../Box';
import styled from 'styled-components';
import { StyledProps } from './Dropdown.types';
import {
  getBackgroundColor,
  getBorderColor,
  getPadding,
  getTextColor,
  getUnderLineBottomPosition,
  getUnderLineLeftPosition,
  getUnderLineRightPosition,
} from './Dropdown.helpers';

export const StyledDropdownWrapper = styled.div<StyledProps>`
  position: relative;
`;

export const StyledDropdownButton = styled.button<StyledProps>`
  display: flex;
  position: relative;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme, isOpen, openBackgroundColor }) =>
    getBorderColor({ theme, isOpen, openBackgroundColor })};
  border-bottom: none;
  border-radius: ${({ theme }) => theme.newBorderRadius.s};
  border-bottom-left-radius: ${({ theme }) => theme.newBorderRadius.none};
  border-bottom-right-radius: ${({ theme }) => theme.newBorderRadius.none};
  z-index: 2;
  background-color: ${({ theme, isOpen, openBackgroundColor }) =>
    getBackgroundColor({ theme, isOpen, openBackgroundColor })};
  padding: ${({ theme, size = 'medium' }) => getPadding(theme, size)};
  color: ${({ theme, isOpen, openBackgroundColor, textColor }) =>
    getTextColor({ theme, isOpen, openBackgroundColor, textColor })};
  &:hover {
    &:after {
      content: '';
      position: absolute;
      bottom: ${({ size = 'medium' }) => getUnderLineBottomPosition(size)};
      left: ${({ size = 'medium' }) => getUnderLineLeftPosition(size)};
      right: ${({ size = 'medium' }) => getUnderLineRightPosition(size)};
      height: 2px;
      background-color: currentColor;
    }
  }
`;

export const StyledDropdownList = styled(Box)<StyledProps>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  min-width: 100%;
  z-index: 1;
  animation: fadein ${({ theme }) => theme.transition.duration.shortest} linear;
  margin-top: -2px;
  right: ${({ position }) => position === 'left' && '0'};
  border-color: ${({ theme, isOpen, openBackgroundColor }) =>
    getBorderColor({ theme, isOpen, openBackgroundColor })};
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CloseIconWrapper = styled.div`
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

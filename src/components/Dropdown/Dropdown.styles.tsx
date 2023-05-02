import { Icon } from '../Icon/Icon';
import { Box } from '../Box';
import styled from 'src/utils/styled';
import { StyledProps } from './Dropdown.types';
import { getPadding, getUnderLineBottomPosition } from './Dropdown.hepers';

export const StyledDropdownWrapper = styled(Box)<StyledProps>`
  position: relative;
`;

export const StyledDropdownButton = styled.button<StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.newBorderRadius.s};
  border-bottom-left-radius: ${({ theme }) => theme.newBorderRadius.none};
  border-bottom-right-radius: ${({ theme }) => theme.newBorderRadius.none};
  background-color: ${({ theme, isOpen, inverseStyle }) => {
    if (!isOpen) return theme.colors.transparent;
    return inverseStyle ? theme.colors.polarNight : theme.colors.arcticWind;
  }};
  padding: ${({ theme, size = 'medium' }) => getPadding(theme, size)};
  color: ${({ theme, inverseStyle, isOpen }) => {
    if (!inverseStyle) {
      return isOpen ? theme.colors.polarNight : theme.colors.arcticWind;
    }
    return isOpen ? theme.colors.arcticWind : theme.colors.polarNight;
  }};
`;

export const StyledDropdownList = styled(Box)<StyledProps>`
  position: absolute;
  min-width: calc(100% + 30px);
  animation: fadein ${({ theme }) => theme.transition.duration.shortest} linear;
  right: ${({ position }) => position === 'left' && '0'};
  transform: ${({ position }) => position === 'left' && 'translateX(0)'};
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
  justify-content: center;
  align-items: center;
`;

export const StyledButtonTextWrapper = styled.div<StyledProps>`
  position: relative;
  &:hover {
    &:after {
      content: '';
      position: absolute;
      bottom: ${({ size = 'medium' }) => getUnderLineBottomPosition(size)};
      left: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;
    }
  }
`;

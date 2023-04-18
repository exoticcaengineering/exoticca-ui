import { Icon } from '../Icon/Icon';
import { Box } from '../Box';
import styled from 'src/utils/styled';
import { StyledProps } from './Dropdown.types';
import { Button } from 'src/components/Button';

export const StyledDropdownWrapper = styled(Box)<StyledProps>`
  position: relative;
`;

export const DropdownButton = styled(Button)<StyledProps>`
  border-bottom-left-radius: ${({ theme }) => theme.newBorderRadius.none};
  border-bottom-right-radius: ${({ theme }) => theme.newBorderRadius.none};
  background-color: transparent;
  border: none;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.arcticWind : 'transparent'};
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const IconArrow = styled(Icon)<StyledProps>`
  transition: transform ${({ theme }) => theme.transition.duration.short};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const DropdownList = styled(Box)<StyledProps>`
  position: absolute;
  animation: fadein 0.3s linear;
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

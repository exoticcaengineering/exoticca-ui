import { Icon } from '../Icon/Icon';
import { Box } from '../Box';
import styled from 'src/utils/styled';
import { StyledProps } from './Dropdown.types';
import { Button } from 'src/components/Button';

export const StyledDropdownWrapper = styled(Box)<StyledProps>`
  position: relative;
`;

export const StyledDropdownButton = styled(Button)<StyledProps>`
  border-radius: ${({ theme }) => theme.newBorderRadius.s};
  border-bottom-left-radius: ${({ theme }) => theme.newBorderRadius.none};
  border-bottom-right-radius: ${({ theme }) => theme.newBorderRadius.none};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.arcticWind : 'transparent'};
  &:hover {
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.arcticWind : 'transparent'};
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;

export const StyledDropdownList = styled(Box)<StyledProps>`
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

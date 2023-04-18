import { Icon } from '../Icon/Icon';
import { Box } from '../Box';
import styled from 'src/utils/styled';
import { StyledProps } from './Dropdown.types';
import { Item } from 'src/components/Item';

export const StyledDropdownWrapper = styled(Box)<StyledProps>`
  position: relative;
`;

export const DropdownButton = styled(Item)<StyledProps>`
  border-radius: ${({ theme }) => theme.newBorderRadius.s};
  border-bottom-left-radius: ${({ theme }) => theme.newBorderRadius.none};
  border-bottom-right-radius: ${({ theme }) => theme.newBorderRadius.none};
  background-color: transparent;
  border: none;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.arcticWind : 'transparent'};
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

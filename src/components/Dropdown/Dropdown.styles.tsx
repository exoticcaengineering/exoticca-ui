import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Box } from '../Box';

type Props = {
  isOpen?: boolean;
  position?: 'left' | 'right';
};

export const DropdownButton = styled.button<Props>`
  border-top-left-radius: ${({ theme }) => theme.newBorderRadius.s};
  border-top-right-radius: ${({ theme }) => theme.newBorderRadius.s};
  background-color: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing(0.6, 0)};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.arcticWind : 'transparent'};
`;

export const IconArrow = styled(Icon)<Props>`
  margin-left: ${({ theme }) => theme.spacing(1)};
  transition: all 0.2s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const DropdownList = styled(Box)<Props>`
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

export const CloseWrapper = styled.button<Props>`
  all: unset;
  position: absolute;
  right: ${({ theme, position }) => position === 'right' && theme.spacing(1)};
  left: ${({ theme, position }) => position === 'left' && theme.spacing(-0.5)};
  top: ${({ theme }) => theme.spacing(1)};
`;

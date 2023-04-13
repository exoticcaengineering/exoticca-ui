import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Box } from '../Box';

type Props = {
  isOpen: boolean;
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

export const DropdownList = styled(Box)`
  position: absolute;
  animation: fadein 0.3s linear;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

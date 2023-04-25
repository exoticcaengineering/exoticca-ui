import { css } from 'styled-components';
import { StyledProps } from './Drawer.types';
import styled from 'src/utils/styled';

export const DrawerContainer = styled.div<StyledProps>`
  position: fixed;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  width: 100vw;
  height: ${({ heightProp }) => `${heightProp}vh`};
  overflow: scroll;
  transition: ${({ theme }) => theme.transition.duration.short} ease-in-out;
  background-color: ${({ theme }) => theme.colors.arcticWind};
  border-top-right-radius: ${({ theme }) => theme.newBorderRadius.l};
  border-top-left-radius: ${({ theme }) => theme.newBorderRadius.l};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid black;
  z-index: ${({ theme }) => theme.zIndex.level10};
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(0);
    `}
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0, 2, 2, 2)};
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.polarNight};
  position: absolute;
  bottom: 0;
  left: 0;
`;

import styled, { css } from 'styled-components';
import { StyledProps } from './Drawer.types';

export const StyledDrawerWrapper = styled.div<StyledProps>`
  position: relative;
  z-index: ${({ theme, isOpen }) =>
    isOpen ? theme.zIndex.level10 : theme.zIndex.negative};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transition: all ${({ theme }) => theme.transition.duration.short} ease-in-out;
`;

export const StyledDrawerInnerContainer = styled.div<StyledProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(calc(100% + 150px));
  top: ${({ heightProp }) => `calc(100% - ${heightProp}%)`};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.duration.short} ease-in-out;
  background-color: ${({ theme }) => theme.colors.arcticWind};
  border-top-right-radius: ${({ theme }) => theme.newBorderRadius.l};
  border-top-left-radius: ${({ theme }) => theme.newBorderRadius.l};
  padding: ${({ theme }) => theme.spacing(5, 0, 4, 3)};
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
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const StyledContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

export const StyledBottomBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.polarNight};
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StyledOverlay = styled.div<StyledProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

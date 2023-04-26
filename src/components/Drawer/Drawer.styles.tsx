import { css } from 'styled-components';
import { StyledProps } from './Drawer.types';
import styled from 'src/utils/styled';

export const StyledDrawerContainer = styled.div<StyledProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  height: ${({ heightProp }) => `${heightProp}vh`};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.duration.short} ease-in-out;
  background-color: ${({ theme }) => theme.colors.arcticWind};
  border-top-right-radius: ${({ theme }) => theme.newBorderRadius.l};
  border-top-left-radius: ${({ theme }) => theme.newBorderRadius.l};
  padding: ${({ theme }) => theme.spacing(9, 0, 4, 3)};
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

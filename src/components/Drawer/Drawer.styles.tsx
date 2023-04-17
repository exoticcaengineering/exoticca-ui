import styled from 'styled-components';

export const DrawerContainer = styled.div<{
  heightProp: number;
  isOpen: boolean;
}>`
  position: fixed;
  left: 0;
  bottom: ${({ isOpen, heightProp }) => (isOpen ? 0 : `-${heightProp}vh`)};
  width: 100vw;
  height: ${({ heightProp }) => `${heightProp}vh`};
  overflow: scroll;
  transition: 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.arcticWind};
  border-top-right-radius: ${({ theme }) => theme.newBorderRadius.l};
  border-top-left-radius: ${({ theme }) => theme.newBorderRadius.l};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid black;
`;

export const TopBar = styled.div`
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

export const IconWrapper = styled.div``;

import React from 'react';
import styled from 'styled-components';

type Props = {
  openHeight: number;
  children: React.ReactNode;
};

const DrawerContainer = styled.div<{ heightProp: number }>`
  width: 100%;
  height: fit-content;
  max-height: ${({ heightProp }) => `${heightProp}vh`}
  overflow: hidden;
  transition: 0.3s ease-in-out height;
`;

const Drawer = ({ openHeight, children }: Props) => {
  return <DrawerContainer heightProp={openHeight}>{children}</DrawerContainer>;
};

export default Drawer;

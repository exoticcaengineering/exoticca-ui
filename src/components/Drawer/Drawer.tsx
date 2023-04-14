import React, { forwardRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';
import { Icon } from '../Icon/Icon';
import {
  BottomBar,
  ContentWrapper,
  DrawerContainer,
  IconWrapper,
  TopBar,
} from './Drawer.styles';
import { DrawerRef } from './Drawer.types';

type Props = {
  openHeight: number;
  children: React.ReactNode;
};

const Drawer = ({ openHeight, children }: Props, ref: React.Ref<DrawerRef>) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
  }));

  return (
    <DrawerContainer heightProp={openHeight} isOpen={open}>
      <TopBar>
        <IconWrapper onClick={handleClose}>
          <Icon icon="ico-close" size={'regular'} />
        </IconWrapper>
      </TopBar>
      <ContentWrapper>{children}</ContentWrapper>
      <BottomBar />
    </DrawerContainer>
  );
};

export default forwardRef(Drawer);

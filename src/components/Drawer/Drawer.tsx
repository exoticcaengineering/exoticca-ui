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
import { DrawerProps, DrawerRef } from './Drawer.types';

const DrawerComp = (
  { openHeight, children }: DrawerProps,
  ref: React.Ref<DrawerRef>,
) => {
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
          <Icon icon="close" size={'medium'} />
        </IconWrapper>
      </TopBar>
      <ContentWrapper>{children}</ContentWrapper>
      <BottomBar />
    </DrawerContainer>
  );
};

export const Drawer = forwardRef(DrawerComp);

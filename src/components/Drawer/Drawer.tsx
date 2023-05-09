import React, { forwardRef, useRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';
import {
  StyledBottomBar,
  StyledContentWrapper,
  StyledDrawerContainer,
  StyledIconWrapper,
} from './Drawer.styles';
import { Props, DrawerRef } from './Drawer.types';
import { IconButton } from 'src/components/Button';
import { useOnClickOutside } from 'src/hooks';

const DrawerComp = (
  {
    openHeight,
    children,
    className,
    testId = 'drawer',
    onOpen,
    onClose,
  }: Props,
  ref: React.Ref<DrawerRef>,
) => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    onOpen?.();
    setOpen(true);
  };
  const handleClose = () => {
    onClose?.();
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
    isOpen: open,
  }));

  useOnClickOutside(drawerRef, handleClose);

  return (
    <StyledDrawerContainer
      ref={drawerRef}
      heightProp={openHeight}
      isOpen={open}
      className={className}
      data-testid={testId}
    >
      {open && (
        <>
          <StyledIconWrapper>
            <IconButton icon={{ icon: 'close' }} color="white" />
          </StyledIconWrapper>

          <StyledContentWrapper data-testid="drawer-content-wrapper">
            {children}
          </StyledContentWrapper>
        </>
      )}
      <StyledBottomBar />
    </StyledDrawerContainer>
  );
};

export const Drawer = forwardRef(DrawerComp);

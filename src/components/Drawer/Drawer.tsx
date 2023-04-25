import React, { forwardRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';
import {
  BottomBar,
  ContentWrapper,
  DrawerContainer,
  StyledIconWrapper,
} from './Drawer.styles';
import { DrawerProps, DrawerRef } from './Drawer.types';
import { Button } from 'src/components/Button';

const DrawerComp = (
  { openHeight, children, className, testId = 'drawer' }: DrawerProps,
  ref: React.Ref<DrawerRef>,
) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
  }));

  return (
    <DrawerContainer
      heightProp={openHeight}
      isOpen={open}
      className={className}
      data-testid={testId}
    >
      {open && (
        <>
          <StyledIconWrapper>
            <Button
              centerIcon={{ icon: 'close', size: 'medium' }}
              onClick={handleClose}
            />
          </StyledIconWrapper>

          <ContentWrapper data-testid="drawer-content-wrapper">
            {children}
          </ContentWrapper>

          <BottomBar />
        </>
      )}
    </DrawerContainer>
  );
};

export const Drawer = forwardRef(DrawerComp);

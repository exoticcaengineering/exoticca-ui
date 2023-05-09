import { createPortal } from 'react-dom';
import React, { forwardRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';
import {
  StyledBottomBar,
  StyledContentWrapper,
  StyledDrawerInnerContainer,
  StyledDrawerWrapper,
  StyledIconWrapper,
  StyledOverlay,
} from './Drawer.styles';
import { Props, DrawerRef } from './Drawer.types';
import { IconButton } from 'src/components/Button';

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

  return (
    <>
      {createPortal(
        <StyledDrawerWrapper isOpen={open}>
          {open && <StyledOverlay isOpen={open} onClick={handleClose} />}
          <StyledDrawerInnerContainer
            heightProp={openHeight}
            isOpen={open}
            className={className}
            data-testid={testId}
          >
            {open && (
              <>
                <StyledIconWrapper>
                  <IconButton
                    icon={{ icon: 'close' }}
                    color="white"
                    size="medium"
                    onClick={handleClose}
                  />
                </StyledIconWrapper>

                <StyledContentWrapper data-testid="drawer-content-wrapper">
                  {children}
                </StyledContentWrapper>
              </>
            )}
            <StyledBottomBar />
          </StyledDrawerInnerContainer>
        </StyledDrawerWrapper>,
        document.body,
      )}
    </>
  );
};

export const Drawer = forwardRef(DrawerComp);

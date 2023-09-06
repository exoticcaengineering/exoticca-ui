import React, { forwardRef, useEffect } from 'react';
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
    isOpenOnLoad,
  }: Props,
  ref: React.Ref<DrawerRef>,
) => {
  const [open, setOpen] = useState(isOpenOnLoad ?? false);

  useEffect(() => {
    setOpen(!!isOpenOnLoad);
  }, [isOpenOnLoad]);

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
    <StyledDrawerWrapper isOpen={open} data-testid={testId}>
      {open && <StyledOverlay isOpen={open} onClick={handleClose} />}
      <StyledDrawerInnerContainer
        heightProp={openHeight}
        isOpen={open}
        className={className}
      >
        {open && (
          <>
            <StyledIconWrapper>
              <IconButton
                icon={{ icon: 'close' }}
                color="primary"
                size="medium"
                onClick={handleClose}
                variant="tertiary"
              />
            </StyledIconWrapper>

            <StyledContentWrapper
              data-testid="drawer-content-wrapper"
              role="navigation"
            >
              {children}
            </StyledContentWrapper>
          </>
        )}
        <StyledBottomBar />
      </StyledDrawerInnerContainer>
    </StyledDrawerWrapper>
  );
};

export const Drawer = forwardRef(DrawerComp);

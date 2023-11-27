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
import { CloseIcon } from 'src/components/SvgIcons';

export const Drawer = forwardRef<DrawerRef, Props>(
  (
    {
      openHeight,
      children,
      className,
      testId = 'drawer',
      onOpen,
      onClose,
      isOpenOnLoad,
    }: Props,
    ref,
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
                  icon={<CloseIcon />}
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
  },
);

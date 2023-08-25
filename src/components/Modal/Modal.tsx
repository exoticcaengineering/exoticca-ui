import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';

import {
  StyledBottomCloseButtonWrapper,
  StyledCloseBtnWrapper,
  StyledModal,
  StyledModalContentWrapper,
  StyledModalHeaderWrapper,
  StyledModalInnerWrapper,
  StyledModalWrapper,
  StyledShade,
} from './Modal.styles';
import { enableScroll } from 'src/utils/enableScroll';
import { disableScroll } from 'src/utils/disableScroll';
import { Props } from './Modal.types';
import { createRandomId } from 'src/utils/createRandomId';
import { Button, IconButton } from '../Button';

export const Modal = forwardRef(
  (
    {
      id,
      testId,
      className,
      children,
      header,
      BottomCloseButtonText,
      fullScreen,
      isClosable = true,
      disableCloseOnClickOutside,
      onOpenCallback,
      onCloseCallback,
    }: Props,
    ref: React.Ref<unknown>,
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const modalUniqueKey = useMemo(() => `${id}-${createRandomId()}`, [id]);

    useEffect(() => {
      return () => {
        // Enabling scroll always on the unmount of the modal
        // (sometimes we are controling if we show or not the modal with external variables)
        enableScroll();
      };
    }, []);

    const handleOpenModal = useCallback(() => {
      if (isOpen) return;
      disableScroll();
      setIsOpen(true);
      onOpenCallback?.();
    }, [onOpenCallback, id, isOpen]);

    const handleCloseModal = useCallback(() => {
      if (!isClosable) return;
      enableScroll();
      setIsOpen(false);
      onCloseCallback?.();
    }, [isClosable, onCloseCallback, id]);

    useImperativeHandle(
      ref,
      () => ({
        open: handleOpenModal,
        close: handleCloseModal,
      }),
      [handleCloseModal, handleOpenModal],
    );

    const handleEscape = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleCloseModal();
        }
      },
      [handleCloseModal],
    );

    useEffect(() => {
      // close on escape key
      if (isOpen) {
        document.addEventListener('keydown', handleEscape, { passive: true });
      }
      return () => {
        document.removeEventListener('keydown', handleEscape, false);
      };
    }, [handleEscape, id, isOpen]);

    const handleOnClickOutside = () => {
      if (disableCloseOnClickOutside) return;
      handleCloseModal();
    };

    const hasBottomCloseButton = !!BottomCloseButtonText;
    const hasHeader = !!header;
    const shouldRenderBottomCloseButton = hasBottomCloseButton && isClosable;

    const shouldHaveContentExtraTopPadding = hasHeader;

    if (typeof document === 'undefined') return null;
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <StyledModal>
        <StyledModalWrapper
          id="modalWrapper"
          key={modalUniqueKey}
          data-testid={testId}
          className={className}
          role="dialog"
          fullScreen={fullScreen}
        >
          <StyledModalInnerWrapper>
            <StyledModalHeaderWrapper>{header}</StyledModalHeaderWrapper>

            <StyledModalContentWrapper
              hasBottomCloseButton={hasBottomCloseButton}
              shouldHaveContentExtraTopPadding={
                shouldHaveContentExtraTopPadding
              }
            >
              {children}
            </StyledModalContentWrapper>
          </StyledModalInnerWrapper>
          {shouldRenderBottomCloseButton && (
            <StyledBottomCloseButtonWrapper id="modal-bottom-close-Button">
              {
                <Button
                  text={BottomCloseButtonText}
                  onClick={handleCloseModal}
                  size="small"
                />
              }
            </StyledBottomCloseButtonWrapper>
          )}
          {isClosable && (
            <StyledCloseBtnWrapper>
              <IconButton
                icon={{ icon: 'close' }}
                variant="secondary"
                size="small"
                onClick={handleCloseModal}
              />
            </StyledCloseBtnWrapper>
          )}
        </StyledModalWrapper>
        <StyledShade role="layout" onClick={handleOnClickOutside} />
      </StyledModal>,

      document.body,
    );
  },
);

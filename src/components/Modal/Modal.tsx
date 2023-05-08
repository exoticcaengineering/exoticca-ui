import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import {
  createRandomId,
  disableScroll,
  enableScroll,
  getCookie,
} from './Modal.Helpers';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import { Icon } from 'src/components/Icon';
import { IconName } from 'src/types/IconNames';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';
import {
  CloseBtnWrapper,
  Container,
  ContentContainer,
  ContentWrapper,
  FullScreen,
  GridPadding,
  Highlight,
  HighlightIcon,
  HighlightImage,
  Highlights,
  HighlightText,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  Shade,
  StyledButtonText,
  StyledButtonWrapper,
  StyledCloseIcon,
  Subtitle,
  Title,
} from './Modal.styles';

export interface ButtonComponentProps {
  onClose: () => void;
}

interface ModalProps extends ComponentPropsBaseWithChildren {
  id: string;
  headerContent?: React.ReactNode;
  image?: string;
  blackoutHeader?: boolean;
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  highlights?: {
    icon?: IconName;
    image?: string;
    text?: string;
    color?: string;
  }[];
  footer?: string | JSX.Element;
  ButtonComponent?: (props: ButtonComponentProps) => JSX.Element | null;
  footerBackgroundColor?: string;
  width?: string;
  fullScreen?: boolean;
  isClosable?: boolean;
  onOpenCallback?(): void;
  onCloseCallback?(): void;
  customContentSpacing?: object;
  disableCloseOnClickOutside?: boolean;
  closableFixed?: boolean;
  closeBtnshiftLeft?: string;
  closeBtnTransparant?: boolean;
  closeBtnText?: string;
  darkMode?: boolean;
  fullWidthContent?: boolean;
  fullHeightContent?: boolean;
  mobileFullscreen?: boolean;
  overflowHidden?: boolean;
}
const Modal = (
  {
    id,
    headerContent,
    image,
    highlights,
    title,
    subtitle,
    children,
    footer,
    footerBackgroundColor,
    width,
    fullScreen,
    isClosable = true,
    onOpenCallback,
    onCloseCallback,
    customContentSpacing,
    ButtonComponent,
    disableCloseOnClickOutside,
    closableFixed,
    closeBtnshiftLeft,
    closeBtnTransparant,
    closeBtnText,
    darkMode,
    fullWidthContent,
    fullHeightContent,
    mobileFullscreen,
    overflowHidden,
    blackoutHeader,
  }: ModalProps,
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
    const cookieAB = getCookie('newsletterModal-version');
    const testVersion = cookieAB === 'v2' ? 'b' : 'a';
    const paramsObject = {
      ...(id === 'LeadModal' && {
        //include AB test params only for leadModal
        test: 'pop_up_generic_lead',
        version: testVersion,
      }),
      event: 'gaEventNonInteractive',
      eventCategory: 'modal',
      eventAction: `Open_Modal_${id}`,
      eventLabel: `Open_Modal_${id}`,
    };
    if (isOpen) return;
    disableScroll();
    setIsOpen(true);
    onOpenCallback?.();
    TagManager.dataLayer({
      dataLayer: paramsObject,
    });
  }, [onOpenCallback, id, isOpen]);

  const handleCloseModal = useCallback(() => {
    if (!isClosable) return;
    enableScroll();
    setIsOpen(false);
    onCloseCallback?.();
    TagManager.dataLayer({
      dataLayer: {
        event: 'gaEventNonInteractive',
        eventCategory: 'modal',
        eventAction: `Close_Modal_${id}`,
        eventLabel: `Close_Modal_${id}`,
      },
    });
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

  // Handle margins depending on Highlights content
  let highlightsImageExtraMargin = 0;
  let highlightsTextExtraMargin = 0;

  if (highlights && highlights.length > 0) {
    highlightsImageExtraMargin +=
      highlights.filter((highlight) => highlight.image || highlight.icon)
        .length > 0
        ? 26
        : 0;

    highlightsTextExtraMargin +=
      highlights.filter((highlight) => highlight.text).length > 0 ? 46 : 0;
  }

  const handleOnClickOutside = () => {
    if (disableCloseOnClickOutside) return;
    handleCloseModal();
  };

  const hasButton = !!ButtonComponent;

  const content = (
    <>
      <ContentWrapper
        role="dialog"
        footer={!!footer}
        hasButton={hasButton}
        data-testid={id}
        darkMode={darkMode}
        mobileFullscreen={mobileFullscreen}
        noPadding={!!fullHeightContent}
        overflowHidden={!!overflowHidden}
      >
        <ModalHeader
          image={image}
          blackoutHeader={blackoutHeader}
          withImage={!!(image || blackoutHeader)}
          hasHighlight={!!highlights?.length}
          id="modalHeader"
        >
          {headerContent}
          {isClosable &&
            (closeBtnText ? (
              <CloseBtnWrapper onClick={handleCloseModal}>
                <StyledButtonText>{closeBtnText}</StyledButtonText>
                <StyledCloseIcon
                  fullScreen
                  closableFixed={closableFixed}
                  darkMode={darkMode}
                  shiftLeft={closeBtnshiftLeft}
                  transparantBg={true}
                  relative
                >
                  <Icon
                    stroke={darkMode ? 'arcticWind' : 'polarNight'}
                    size={'regular'}
                    icon="close"
                  />
                </StyledCloseIcon>
              </CloseBtnWrapper>
            ) : (
              <StyledCloseIcon
                fullScreen={fullScreen}
                onClick={handleCloseModal}
                closableFixed={closableFixed}
                darkMode={darkMode}
                shiftLeft={closeBtnshiftLeft}
                transparantBg={closeBtnTransparant}
              >
                <Icon
                  stroke={darkMode ? 'arcticWind' : 'polarNight'}
                  size={'regular'}
                  icon="close"
                />
              </StyledCloseIcon>
            ))}
          <Highlights margin={highlightsTextExtraMargin}>
            {highlights &&
              highlights.length > 0 &&
              highlights.map((highlight, index) => (
                <Highlight key={index}>
                  {highlight.image && <HighlightImage src={highlight.image} />}
                  {highlight.icon && (
                    <HighlightIcon color={highlight.color}>
                      <Icon icon={highlight.icon} size={'medium'} />
                    </HighlightIcon>
                  )}
                  {highlight.text && (
                    <HighlightText>{highlight.text}</HighlightText>
                  )}
                </Highlight>
              ))}
          </Highlights>
        </ModalHeader>
        {title && (
          <GridPadding id={'modalTitle'}>
            <Title
              margin={highlightsImageExtraMargin + highlightsTextExtraMargin}
            >
              {title}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </Title>
          </GridPadding>
        )}

        <ModalContent noPadding={!!fullHeightContent}>
          <Container
            style={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <ContentContainer>
              {fullWidthContent ? (
                <>{children}</>
              ) : (
                <GridPadding style={customContentSpacing}>
                  {children}
                </GridPadding>
              )}
            </ContentContainer>
          </Container>
        </ModalContent>
        {footer && (
          <ModalFooter
            backgroundColor={footerBackgroundColor}
            id={'modalFooter'}
          >
            {footer}
          </ModalFooter>
        )}
      </ContentWrapper>
      {ButtonComponent && (
        <StyledButtonWrapper id="modalButton">
          {<ButtonComponent onClose={handleCloseModal} />}
        </StyledButtonWrapper>
      )}
    </>
  );

  if (typeof document === 'undefined') return null;
  if (!isOpen) return null;

  fullScreen &&
    ReactDOM.createPortal(<FullScreen>{content}</FullScreen>, document.body);

  let stringwidhtPX = width;
  if (typeof width === 'string' && !width.includes('px')) {
    stringwidhtPX = `${width}px`;
  }
  if (typeof width === 'number') {
    stringwidhtPX = `${width}px`;
  }

  return ReactDOM.createPortal(
    <>
      <ModalWrapper
        id="modalWrapper"
        key={modalUniqueKey}
        width={stringwidhtPX}
        mobileFullscreen={mobileFullscreen}
      >
        {content}
      </ModalWrapper>
      ,
      <Shade key="shade" role="layout" onClick={handleOnClickOutside} />
    </>,

    document.body,
  );
};

export default forwardRef(Modal);

import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeContext } from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import TagManager from 'react-gtm-module';
import posed, { PoseGroup } from 'react-pose';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Icon } from './Icon';

import {
  createRandomId,
  disableScroll,
  enableScroll,
  getCookie,
} from 'src/utils';
import { IconName } from '@/types/IconName';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { ComponentPropsBaseWithChildren } from '@/types/ComponentPropsBase';
import { useRouter } from 'next/router';
import { themeDefault } from '@exoticcaengineering/exoticca-ui';

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
  centerVertical?: boolean;
  overflowHidden?: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerImage: (props: any) => ({
      position: 'relative' as const,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '70px',
      background: props.blackoutHeader
        ? themeDefault.colors.polarNight
        : props.topImage
        ? `url(${props.topImage})`
        : '',
      [theme.breakpoints.down('xs')]: {
        height: `${props.hasHighlight ? '64px' : '40px'}`,
      },
    }),
  }),
);

const HeaderImage = styled(Grid)<{
  blackoutHeader: boolean;
  topImage?: string;
  hasHighlight: boolean;
}>`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;
  background: ${({ blackoutHeader, topImage }) =>
    blackoutHeader
      ? themeDefault.colors.polarNight
      : topImage
      ? `url(${topImage})`
      : ''};

  @media (max-width: ${themeDefault.breakpoints.sm}) {
    height: ${({ hasHighlight }) => (hasHighlight ? '64px' : '40px')};
  }
`;
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
    centerVertical,
    overflowHidden,
    blackoutHeader,
  }: ModalProps,
  ref: React.Ref<unknown>,
) => {
  const router = useRouter();
  const phabletUp = useMediaQuery({ screen: 'phablet', type: 'min' });

  const themeStyled = useContext(ThemeContext);

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
    router.events.on('routeChangeComplete', () => {
      enableScroll();
    });
  }, [router.events]);

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

  const classes = useStyles({
    topImage: image,
    hasHighlight: highlights && highlights.length > 0,
    blackoutHeader,
  });

  const content = (
    <>
      <ContentWrapper
        footer={!!footer}
        hasButton={hasButton}
        data-testid={id}
        darkMode={darkMode}
        mobileFullscreen={mobileFullscreen}
        noPadding={!!fullHeightContent}
        overflowHidden={!!overflowHidden}
      >
        <Grid
          id="modalHeader"
          item
          xs={12}
          className={image || blackoutHeader ? classes.headerImage : undefined}
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
                    color={
                      darkMode
                        ? themeDefault.colors.white
                        : themeDefault.colors.grey80
                    }
                    size={fullScreen ? 16 : phabletUp ? 12 : 10}
                    icon="ico-close"
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
                  color={
                    darkMode
                      ? themeDefault.colors.white
                      : themeDefault.colors.grey80
                  }
                  size={fullScreen ? 16 : phabletUp ? 12 : 10}
                  icon="ico-close"
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
                      <Icon icon={highlight.icon} size={24} />
                    </HighlightIcon>
                  )}
                  {highlight.text && (
                    <HighlightText>{highlight.text}</HighlightText>
                  )}
                </Highlight>
              ))}
          </Highlights>
        </Grid>
        {title && (
          <GridPadding id={'modalTitle'} item xs={12}>
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
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {fullWidthContent ? (
                <>{children}</>
              ) : (
                <GridPadding style={customContentSpacing} container>
                  {children}
                </GridPadding>
              )}
            </Grid>
          </Container>
        </ModalContent>
        {footer && (
          <Grid
            id={'modalFooter'}
            item
            xs={12}
            style={{
              backgroundColor: footerBackgroundColor,
              padding: phabletUp ? '24px 48px' : '16px',
              height: '100%',
            }}
          >
            {footer}
          </Grid>
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

  if (fullScreen && !phabletUp)
    return ReactDOM.createPortal(
      <FullScreen pose={isOpen ? 'left' : 'right'}>{content}</FullScreen>,
      document.body,
    );

  let stringwidhtPX = width;
  if (typeof width === 'string' && !width.includes('px')) {
    stringwidhtPX = `${width}px`;
  }
  if (typeof width === 'number') {
    stringwidhtPX = `${width}px`;
  }

  return ReactDOM.createPortal(
    <PoseGroup role="dialog">
      {[
        <ModalWrapper
          id="modalWrapper"
          key={modalUniqueKey}
          width={stringwidhtPX}
          mobileFullscreen={mobileFullscreen}
          centerVertical={centerVertical}
        >
          {content}
        </ModalWrapper>,
        <Shade key="shade" onClick={handleOnClickOutside} />,
      ]}
    </PoseGroup>,
    document.body,
  );
};

export default forwardRef(Modal);

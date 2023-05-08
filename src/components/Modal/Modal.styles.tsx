import styled from 'styled-components';

export const Shade = styled.div`
  position: fixed !important; /* Must have !important because POSE adds absolute */
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  overflow: hidden;
  height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    background: ${(props) => props.theme.colors.black72};
  }
`;

export const ModalWrapper = styled.div<{
  width?: string;
  mobileFullscreen?: boolean;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: ${({ width }) => (width ? width : '544px')};
  max-width: calc(100% - 32px);
  z-index: 9999999;
  border-radius: ${({ theme }) => theme.newBorderRadius.l};
  overflow-y: auto;
  max-height: 90%;
  overflow: hidden;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);

  @media (max-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    ${({ mobileFullscreen }) =>
      mobileFullscreen
        ? `
        height: 100vh;
        min-height: 100vh;
        max-height: 100vh;
        width: 100vw;
        min-width: 100vw;
        max-width: 100vw;
        top: 0;
        left: 0;
        transform: translate(0, 0) !important;
    `
        : `max-height: 85vh`}
  }
`;

export const ContentWrapper = styled.div<{
  footer?: boolean;
  hasButton?: boolean;
  darkMode?: boolean;
  mobileFullscreen?: boolean;
  noPadding?: boolean;
  overflowHidden?: boolean;
}>`
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.black : theme.colors.white};
  padding-bottom: ${({ hasButton, noPadding }) =>
    noPadding ? '0' : hasButton ? '96px' : '16px'};
  max-height: 85vh;
  overflow: ${({ overflowHidden }) => (overflowHidden ? 'hidden' : 'auto')};

  @media (max-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    ${({ mobileFullscreen }) =>
      mobileFullscreen
        ? `
        height: 100vh;
        min-height: 100vh;
        max-height: 100vh;
        width: 100vw;
        min-width: 100vw;
        max-width: 100vw;
        top: 0;
      `
        : `max-height: 85vh;`}
  }
`;

export const FullScreen = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.level10};
  overflow: scroll;
`;

export const ModalHeader = styled.div<{
  withImage: boolean;
  image?: string;
  blackoutHeader?: boolean;
  hasHighlight: boolean;
}>`
  width: 100%;
  display: grid;

  ${({ withImage, theme, image, blackoutHeader, hasHighlight }) =>
    withImage &&
    `
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;
  background: ${
    blackoutHeader ? theme.colors.polarNight : image ? `url(${image})` : ''
  };
  @media (max-width:${theme.newBreakpoints.mobile}) {
    height: ${hasHighlight ? '64px' : '40px'};
  }
`};
`;

export const ModalFooter = styled.div<{ backgroundColor?: string }>`
  ${({ theme, backgroundColor }) => `
    width: 100%;
    height: 100%;
    display: flex;
    padding: 24px 48px;
    background-color: ${backgroundColor ?? 'transparent'}

    @media (max-width:${theme.newBreakpoints.phablet}) {
      padding: 16px;
    }

`}
`;

export const CloseBtnWrapper = styled.div`
  height: 30px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 6px;
  right: 10px;
  cursor: pointer;
  border-radius: 3px;
  z-index: 10;
  transition: 0.3s all ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey20};
  }

  @media (max-width: ${(props) => props.theme.newBreakpoints.phablet}) {
    height: 50px;
  }
`;

export const StyledButtonText = styled.p`
  font-size: 14px;
  margin: 0;
  position: relative;
`;

export const StyledCloseIcon = styled.div<{
  fullScreen?: boolean;
  closableFixed?: boolean;
  darkMode?: boolean;
  shiftLeft?: string;
  transparantBg?: boolean;
  relative?: boolean;
}>`
  cursor: pointer;
  position: ${({ closableFixed, relative }) =>
    relative ? `relative` : closableFixed ? `fixed` : `absolute`};
  width: 32px;
  height: 32px;
  top: ${({ relative }) => (relative ? '0' : '16px')};
  z-index: ${({ closableFixed }) => (closableFixed ? `2` : 'none')};
  right: ${({ shiftLeft, relative }) =>
    relative ? '0' : shiftLeft ? shiftLeft : '16px'};
  border: ${({ fullScreen, theme }) =>
    fullScreen ? undefined : `1px solid ${theme.colors.grey80}`};
  border-radius: 50%;
  background-color: ${(props) =>
    props.transparantBg
      ? props.theme.colors.transparent
      : props.darkMode
      ? props.theme.colors.black
      : props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 24px;
    height: 24px;
    top: 10px;
    ${({ relative }) =>
      relative &&
      `
      top: 0;
    
    `}
  }
`;

export const Highlights = styled.div<{ margin: number }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;

  padding-left: 32px;
  padding-right: 32px;
  bottom: calc(-26px - ${(props) => props.margin}px);

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HighlightImage = styled.img`
  height: 52px;
  width: 52px;
  margin: auto;
`;

export const HighlightIcon = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 52px;
  margin: auto;
  background-color: ${(props) => props.theme.colors.polarNightLight};
`;

export const HighlightText = styled.div`
  font-size: 0.75rem;
  margin-top: 10px;
  text-align: center;
  width: 90px;
  height: 36px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 8px;
  }
`;

export const Title = styled.div<{ margin: number }>`
  margin: calc(16px + ${(props) => props.margin}px) 0 16px;
  font-size: 2rem;
  line-height: 40px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: calc(8px + ${(props) => props.margin}px) 0 2px;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 30px;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.125rem;
  line-height: 22.5px;
  font-weight: 500;
  text-align: center;
`;

export const ModalContent = styled.div<{ noPadding: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  max-height: 100%;
  scrollbar-width: none;
  padding-bottom: ${({ noPadding }) => (noPadding ? '0' : '16px')};
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const GridPadding = styled.div`
  padding: 0 25px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 25px;
  z-index: 1;
`;

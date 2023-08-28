import styled, { css } from 'styled-components';
import { StyledProps } from './Modal.types';
import { colorWithOpacity } from 'src/utils/getColorWithOpacity';

export const StyledModal = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.level10};
  inset: 0;
`;

export const StyledShade = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) =>
    colorWithOpacity(theme.palette.background.contrast, 0.6)};
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.level0};
`;

export const StyledModalWrapper = styled.div<StyledProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.level1};
  border-radius: ${({ theme, fullScreen }) =>
    fullScreen
      ? `${theme.newBorderRadius.l} ${theme.newBorderRadius.l} ${theme.newBorderRadius.none} ${theme.newBorderRadius.none}`
      : theme.newBorderRadius.l};
  overflow-y: auto;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 85vh;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.background.main};
  color: ${({ theme }) => theme.palette.background.contrast};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    width: 544px;
  }

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      width: auto;
      max-height: unset;
      transform: none;
      inset: 0;
      @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
        width: auto;
      }
    `}
`;

export const StyledModalInnerWrapper = styled.div<StyledProps>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const StyledModalHeaderWrapper = styled.div`
  flex-shrink: 0;
  min-height: 64px;
  background: ${({ theme }) => theme.palette.background.main};
`;

export const StyledCloseBtnWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

export const StyledModalContentWrapper = styled.div<StyledProps>`
  overflow: auto;
  scrollbar-width: none;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ hasBottomCloseButton, theme }) =>
    hasBottomCloseButton ? theme.spacing(12) : theme.spacing(4)};
  padding-top: ${({ theme, shouldHaveContentExtraTopPadding }) =>
    shouldHaveContentExtraTopPadding ? theme.spacing(4) : 0};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledBottomActionButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  z-index: ${({ theme }) => theme.zIndex.level1};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.main};
  border-top: 1px solid ${({ theme }) => theme.palette.background.light};
`;

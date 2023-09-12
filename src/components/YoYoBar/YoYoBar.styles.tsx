import { Tag } from 'src/components/Tag';
import { TextBody2, TextBody3 } from 'src/components/TypographyVariants';
import styled, { keyframes } from 'styled-components';
import { StyledProps } from './YoYoBar.types';

const CardTransition = keyframes`
  0% { opacity: 0}
  3% { opacity: 0}
  10% { opacity: 1}
  90% { opacity: 1 }
  97% { opacity: 0 }
  100% { opacity: 0 }
`;

export const YoYoBarWrapper = styled.aside<StyledProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
  transition: ${({ theme }) =>
    `height ${theme.transition.duration.shortest} linear 200ms`};
  overflow: hidden;
  background-color: ${({
    theme,
    backgroundColor = 'promotion',
    backgroundShade = 'main',
  }) => theme.palette[backgroundColor][backgroundShade]};
`;

// ** CARD STYLES ** //

export const YoYoBarCardWrapper = styled.div<StyledProps>`
  z-index: ${({ theme }) => theme.zIndex.level8};
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: center;
  align-items: center;
  position: relative;
  height: 28px;
  padding: ${({ theme }) => theme.spacing(0.5, 1)};
  width: 100%;
  min-width: 360px;
  justify-content: center;
  transition: ${({ theme }) =>
    `opacity ${theme.transition.duration.short} linear`};
  animation-iteration-count: infinite;
  animation-duration: ${({ interval }) => `${interval}s`};
  animation-name: ${CardTransition};
  @media (min-width: ${(props) => props.theme.newBreakpoints.phablet}) {
    padding: ${({ theme }) => theme.spacing(0.5, 1.5)};
  }
  @media (min-width: ${(props) => props.theme.newBreakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(0.5, 3)};
  }
`;

export const TextYoYobarDesktop = styled(TextBody2)<StyledProps>`
  color: ${({ theme, color = 'primary' }) => theme.palette[color].main};
  display: none;
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    display: initial;
  }
`;

export const TextYoYobarMobile = styled(TextBody3)`
  display: initial;
  color: ${({ theme, color = 'primary' }) => theme.palette[color].main};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    display: none;
  }
`;

export const TextYoYobarInfo = styled(TextBody3)`
  text-decoration: underline;
  color: ${({ theme, color = 'primary' }) => theme.palette[color].main};
`;

export const StyledTag = styled(Tag)`
  padding: ${({ theme }) => theme.spacing(0, 1)};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level8};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

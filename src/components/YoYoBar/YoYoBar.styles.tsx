import { Tag } from 'src/components/Tag';
import { TextBody2, TextBody3 } from 'src/components/TypographyVariants';
import styled, { keyframes } from 'styled-components';

const CardTransition = keyframes`
  0% { opacity: 0}
  3% { opacity: 0}
  10% { opacity: 1}
  90% { opacity: 1 }
  97% { opacity: 0 }
  100% { opacity: 0 }
`;

export const YoYoBarWrapper = styled.aside<{
  backgroundImage?: string;
  backgroundColor?: string;
  gradient?: string;
  isClickable: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
  background-image: ${({ backgroundImage, gradient }) =>
    gradient
      ? gradient
      : backgroundImage
      ? `url('${backgroundImage}') 0 0 repeat`
      : ''};
  transition: height 200ms linear 100ms;
  overflow: hidden;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'unset'};

  .cardCarousel {
    width: 100%;
  }
`;

// ** CARD STYLES ** //

export const YoYoBarCardWrapper = styled.div<{ interval: number }>`
  z-index: 100;
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 28px;
  padding: 4px 8px;
  width: 100%;
  min-width: 360px;
  justify-content: center;
  transition: opacity 200ms linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ interval }) => `${interval}s`};
  animation-name: ${CardTransition};
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 4px 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4px 24px;
  }
`;

export const TextYoYobarDesktop = styled(TextBody2)`
  @media (max-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    display: none;
  }
`;

export const TextYoYobarMobile = styled(TextBody3)`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    display: none;
  }
`;

export const TextYoYobarInfo = styled(TextBody3)`
  text-decoration: underline;
`;

export const StyledTag = styled(Tag)`
  padding: 0 6px;
  position: relative;
  z-index: 100;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

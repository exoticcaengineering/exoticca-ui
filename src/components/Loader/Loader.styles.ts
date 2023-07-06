import styled, { css, keyframes } from 'styled-components';
import { StyledProps } from './Loader.types';

export const LoadingKeyframes = keyframes`
    0% {
      opacity: 1;
      transform: scale(0.1);
    }
    50% {
      opacity: 0.2;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `;

export const StyledLoadingDotsWrapper = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ color = 'background', colorShade = 'medium', theme }) =>
    theme.palette[color][colorShade]};
`;

export const StyledLoadingDot = styled.span<StyledProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: currentColor;
  border-radius: 50%;
  animation: ${LoadingKeyframes} 1.5s infinite ease-out;
  ${({ dotIndicator = 1 }) => css`
    left: ${(dotIndicator - 1) * 15}px;
    animation-delay: ${dotIndicator * 0.2}s;
  `}
`;

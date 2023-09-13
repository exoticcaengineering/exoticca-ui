import styled, { css, keyframes } from 'styled-components';
import { StyledProps } from './ProgressBar.types';

const progress = ({ progressFrom = 0, progressTo = 100 }) => keyframes`
   from {
      width: ${`${progressFrom}%`};
    }
    to {
      width: ${`${progressTo}%`};
    }
`;

export const StyledProgressBarBcg = styled.div<StyledProps>`
  position: relative;
  background-color: ${({
    theme,
    backgroundColor = 'background',
    backgroundColorShade = 'main',
  }) => theme.palette[backgroundColor][backgroundColorShade]};
  height: ${({ height }) => (height ? `${height}px` : '4px')};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({
      theme,
      progressColor = 'primary',
      progressColorShade = 'main',
    }) => theme.palette[progressColor][progressColorShade]};
    animation: ${({
      progressFrom = 0,
      progressTo = 100,
      duration = 40,
      iterationCount = 'infinite',
      timingFunction = 'ease',
      fillMode = 'forwards',
    }) => css`
      ${progress({
        progressFrom,
        progressTo,
      })} ${duration}s ${timingFunction} ${iterationCount} ${fillMode}
    `};
  }
`;

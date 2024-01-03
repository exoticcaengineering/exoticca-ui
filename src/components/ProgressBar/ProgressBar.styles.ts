import styled from 'styled-components';
import { StyledProps } from './ProgressBar.types';

export const StyledProgressBarBcg = styled.div<StyledProps>`
  position: relative;
  background-color: ${({
    theme,
    backgroundColor,
    backgroundColorShade = 'main',
  }) => {
    if (!backgroundColor) return 'transparent';
    return theme.palette[backgroundColor][backgroundColorShade];
  }};
  height: ${({ height }) => (height ? `${height}px` : '4px')};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: ${({ value = 0 }) => `calc(${value}% - 100%)`};
    background-color: ${({
      theme,
      progressColor = 'primary',
      progressColorShade = 'main',
    }) => theme.palette[progressColor][progressColorShade]};
    transition: ${({ duration = 40, timingFunction = 'ease' }) =>
      `margin-left ${duration}s ${timingFunction}`};
  }
`;

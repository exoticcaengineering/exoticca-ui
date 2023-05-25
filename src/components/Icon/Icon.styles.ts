import { StyledProps } from './Icon.types';
import { Box } from 'src/components/Box';
import styled, { css } from 'styled-components';
import { getIconSize } from './Icon.helpers';

export const StyledWrapper = styled(Box)<StyledProps>`
  line-height: 0;
  display: inline-block;
  width: ${({ size, width }) => {
    if (width) return typeof width === 'number' ? `${width}px` : width;
    return getIconSize(size);
  }};
  height: ${({ size, height }) => {
    if (height) return typeof height === 'number' ? `${height}px` : height;
    return getIconSize(size);
  }};
  transform: ${({ rotate = 0 }) => `rotate(${rotate}deg)`};
  transition: all ${({ theme }) => theme.transition.duration.shorter} ease;
  & > svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  ${({ stroke, theme, originalIconColor }) =>
    stroke &&
    !originalIconColor &&
    css`
      & > svg * {
        stroke: ${theme.colors[stroke]};
      }
    `}

  ${({ fill, theme, originalIconColor }) =>
    fill &&
    !originalIconColor &&
    css`
      & > svg * {
        fill: ${theme.colors[fill]};
      }
    `}
`;

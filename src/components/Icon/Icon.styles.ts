import styled from 'src/utils/styled';
import { StyledProps } from './Icon.types';
import { Box } from 'src/components/Box';
import { css } from 'styled-components';
import { getIconSize, getStrokeWidth } from './Icon.helpers';

export const StyledWrapper = styled(Box)<StyledProps>`
  line-height: 0;
  display: inline-block;
  width: ${({ size, fullWidth, width, autoWidth }) => {
    if (fullWidth) return '100%';
    if (autoWidth) return 'auto';
    if (width) return `${width}px`;
    return getIconSize(size);
  }};
  height: ${({ size, fullHeight, height, autoHeight }) => {
    if (fullHeight) return '100%';
    if (autoHeight) return 'auto';
    if (height) return `${height}px`;
    return getIconSize(size);
  }};
  transform: ${({ rotate = 0 }) => `rotate(${rotate}deg)`};
  transition: all ${({ theme }) => theme.transition.duration.shorter} ease;
  z-index: 1;
  & > svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  & > svg * {
    stroke-width: ${({ size }) => getStrokeWidth(size)};
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

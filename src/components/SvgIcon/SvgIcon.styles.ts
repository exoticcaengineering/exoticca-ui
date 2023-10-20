import { StyledProps } from './SvgIcon.types';
import styled, { css } from 'styled-components';
import { getIconSize } from './SvgIcon.helpers';

export const StyledWrapper = styled.div<StyledProps>`
  line-height: 0;
  display: inline-block;
  flex-shrink: 0;
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

  ${({ stroke, theme, originalIconColor, strokeShade = 'main' }) =>
    stroke &&
    !originalIconColor &&
    css`
      & > svg * {
        stroke: ${stroke === 'currentColor'
          ? 'currentColor'
          : theme.palette[stroke][strokeShade]};
      }
    `}

  ${({ fill, theme, originalIconColor, fillShade = 'main' }) =>
    fill &&
    !originalIconColor &&
    css`
      & > svg * {
        fill: ${fill === 'currentColor'
          ? 'currentColor'
          : theme.palette[fill][fillShade]};
      }
    `}
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'inherit')};
`;

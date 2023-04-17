import styled from 'src/utils/styled';
import { StyledProps } from './Icon.types';
import { Box } from 'src/components/Box';
import { css } from 'styled-components';
import { getIconSize, getStrokeWidth } from './Icon.helpers';

export const StyledWrapper = styled(Box)<StyledProps>`
  line-height: 0;
  display: inline-block;
  width: ${({ size, fullWidth }) => (fullWidth ? '100%' : getIconSize(size))};
  height: ${({ size, fullHeight }) =>
    fullHeight ? '100%' : getIconSize(size)};
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

  ${({ stroke, theme }) =>
    stroke &&
    css`
      & > svg * {
        stroke: ${theme.colors[stroke]};
      }
    `}

  ${({ fill, theme }) =>
    fill &&
    css`
      & > svg * {
        fill: ${theme.colors[fill]};
      }
    `}
`;

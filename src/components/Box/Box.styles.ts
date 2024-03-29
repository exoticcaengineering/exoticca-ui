import { mapCssPxValue } from 'src/utils/mapCssPxValue';
import styled from 'styled-components';
import { StyleProps } from './Box.types';

export const StyledBoxWrapper = styled.div<StyleProps>`
  position: relative;
  background: ${({
    theme,
    background = 'background',
    backgroundShade = 'main',
  }) => theme.palette[background][backgroundShade]};
  color: ${({ theme, background = 'background' }) =>
    theme.palette[background].contrast};
  border-radius: ${({ theme, borderRadius = 's' }) => {
    if (Array.isArray(borderRadius)) {
      return borderRadius
        .map((radius) => theme.newBorderRadius[radius])
        .join(' ');
    }
    return theme.newBorderRadius[borderRadius];
  }};
  border-width: ${({ borderWidth = [1] }) => {
    if (Array.isArray(borderWidth)) {
      return mapCssPxValue(...borderWidth);
    }
    return `${borderWidth}px`;
  }};
  border-style: ${({ borderStyle = 'solid' }) => borderStyle};
  border-color: ${({ theme, borderColor, borderColorShade = 'main' }) =>
    borderColor ? theme.palette[borderColor][borderColorShade] : 'transparent'};
  box-shadow: ${({ theme, boxShadow = 'none' }) => theme.boxShadow[boxShadow]};
  margin-bottom: ${({ theme, gutterBottom = 0 }) =>
    theme.spacing(gutterBottom)};
  padding: ${({ theme, padding = 0 }) => {
    if (Array.isArray(padding)) {
      return theme.spacing(...padding);
    }
    return theme.spacing(padding);
  }};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'inherit')};
`;

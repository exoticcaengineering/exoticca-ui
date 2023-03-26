import styled from 'src/utils/styled';
import { StyledProps } from './Typography.types';

export const StyledTypographyContainer = styled.div<StyledProps>`
  font-family: ${({ fontFamily = 'main', theme }) =>
    theme.typography.fontFamily[fontFamily]};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.typography.fontSize[fontSize] : 'inherit'};
  font-weight: ${({ theme, fontWeight = 'normal' }) =>
    theme.typography.fontWeight[fontWeight]};
  font-style: ${({ fontStyle = 'inherit' }) => fontStyle};
  text-align: ${({ align = 'inherit' }) => align};
  margin: 0;
  margin-bottom: ${({ theme, gutterBottom = 0 }) =>
    theme.spacing(gutterBottom)};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : 'currentColor'};
  text-decoration: ${({ textDecoration = 'inherit' }) => textDecoration};
  text-transform: ${({ textTransform = 'inherit' }) => textTransform};
  white-space: ${({ noWrap }) => (noWrap ? 'noWrap' : 'revert')};
  cursor: ${({ cursor = 'inherit' }) => cursor};
  cursor: ${({ cursor }) => cursor};
  letter-spacing: ${({ theme, letterSpacing = 'normal' }) =>
    theme.typography.letterSpacing[letterSpacing]};
`;

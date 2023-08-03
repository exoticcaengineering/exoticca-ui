import styled from 'styled-components';
import { Box } from '../Box';
import { StyledProps } from './RecommendedBox.types';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledBox = styled(Box)<StyledProps>`
  border: 1px solid
    ${({ theme, color = 'promotion', colorShade = 'main' }) =>
      theme.palette[color][colorShade]};
`;

export const StyledRecommendedTag = styled.div<StyledProps>`
  position: absolute;
  width: 50%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  background: ${({ theme, color = 'promotion', colorShade = 'main' }) =>
    theme.palette[color][colorShade]};
  padding: ${({ theme }) => theme.spacing(0.5, 3)};
  border-radius: ${({ theme }) => theme.newBorderRadius.m}
    ${({ theme }) => theme.newBorderRadius.m} 0 0;
`;

import styled from 'styled-components';
import { StyleProps } from './FilterInput.types';

export const StyledDropDown = styled.div<StyleProps>`
  border-radius: ${({ theme }) => theme.newBorderRadius.m};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.polarNightMedium};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  position: absolute;
  left: 0;
  min-width: 100%;
  z-index: ${({ theme }) => theme.zIndex.level8};
`;

export const StyledDropDownInner = styled.div`
  padding: ${({ theme }) => theme.spacing(1.5)};
`;

export const StyledFilter = styled.div`
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

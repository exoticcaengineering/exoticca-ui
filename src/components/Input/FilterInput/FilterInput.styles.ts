import styled from 'src/utils/styled';
import { StyleProps } from './FilterInput.types';

export const StyledDropDown = styled.div<StyleProps>`
  border-radius: ${({ theme }) => theme.newBorderRadius.m};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.polarNightMedium};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  position: absolute;
  max-width: 328px;
  width: 100%;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.level8};
  font-size: inherit;
`;

export const StyledDropDownInner = styled.div`
  padding: ${({ theme }) => theme.spacing(1.5)};
  max-height: 360px;
  overflow-y: auto;
  cursor: default;
`;

export const StyledFilter = styled.div`
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

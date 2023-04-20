import styled from 'styled-components';
import { StyleProps } from './Input.types';
import { Icon } from '../Icon';

const ICON_SPACE = '44px';
const NO_ICON_PADDING = '16px';

export const StyledFilter = styled.div`
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const StyledInputWrapper = styled.div<StyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(0.2)};
  padding-bottom: ${({ theme }) => theme.spacing(0.2)};
  padding-left: ${({ icon }) => (icon ? ICON_SPACE : NO_ICON_PADDING)};
  border: 1px solid ${({ theme }) => theme.colors.polarNightMedium};

  border-radius: ${({ rounded, theme }) => {
    if (rounded === 'left') {
      return `${theme.newBorderRadius.l} 0 0 ${theme.newBorderRadius.l}`;
    }
    if (rounded === 'right') {
      return `0 ${theme.newBorderRadius.l} ${theme.newBorderRadius.l} 0`;
    }

    if (rounded === 'both') {
      return theme.newBorderRadius.l;
    }
    return theme.newBorderRadius.xs;
  }};
  font-size: ${({ theme }) => theme.typography.fontSize.h6};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h5};
  }
`;

export const StyledInputInner = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding-right: ${({ theme }) => theme.spacing(0)};
  height: 23px;
  font-size: ${({ theme }) => theme.typography.fontSize.body1};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey70};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  }
`;

export const StyledLabel = styled.label<StyleProps>`
  left: ${({ icon }) => (icon ? ICON_SPACE : NO_ICON_PADDING)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.grey80};
  font-size: ${({ theme }) => theme.typography.fontSize.body2};
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
`;

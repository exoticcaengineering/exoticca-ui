import styled from 'styled-components';
import { StyleProps } from './Input.types';
import { Icon } from '../Icon';

const ICON_SPACE = '44px';
const NO_ICON_PADDING = '16px';

export const StyledInputWrapper = styled.div<StyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(0.2)};
  padding-bottom: ${({ theme }) => theme.spacing(0.2)};
  padding-left: ${({ hasIcon }) => (hasIcon ? ICON_SPACE : NO_ICON_PADDING)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.polarNightMedium};
  height: ${({ labelPosition }) =>
    labelPosition === 'inside' ? '50px' : '44px'};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.arcticWind};
  border-radius: ${({ rounded, theme }) => {
    if (rounded === 'none') {
      return;
    }
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
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  all: unset;
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  width: 100%;
  text-overflow: ellipsis;
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey70};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.palette.background.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.body2};
  cursor: pointer;
`;

export const StyledOutsideLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.body2};
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
`;

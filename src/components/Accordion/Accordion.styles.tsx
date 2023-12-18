import styled, { css } from 'styled-components';
import { StyledProps } from './Accordion.types';
import { Box } from 'src/components/Box';

export const Wrapper = styled.div<StyledProps>`
  ${({ underline }) =>
    underline &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.medium};
      padding: ${({ theme }) => theme.spacing(1)} 0;
    `};
`;
export const StyledHeaderWrapper = styled(Box)<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) =>
    `${theme.newBorderRadius.xs} ${theme.newBorderRadius.xs} 0 0 `};
  cursor: ${({ hasCustomTrigger }) => (hasCustomTrigger ? 'auto' : 'pointer')};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      padding-bottom: ${({ theme }) => theme.spacing(3)};
    `};
`;

export const StyledContent = styled.div<StyledProps>`
  display: grid;
  grid-template-rows: ${({ isEnabledAndOpen }) =>
    isEnabledAndOpen ? '1fr' : '0fr'};
  transition: grid-template-rows
    ${({ theme }) => theme.transition.duration.short} ease-in-out;
`;

export const StyledContentInner = styled.div<StyledProps>`
  overflow: hidden;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

import styled from 'src/utils/styled';
import { css } from 'styled-components';
import { StyledProps } from './Accordion.types';
import { Box } from 'src/components/Box';

export const StyledHeaderWrapper = styled(Box)<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-radius: ${({ theme }) =>
    `${theme.newBorderRadius.xs} ${theme.newBorderRadius.xs} 0 0 `};
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;

  ${({ isOpen, backgroundColor }) =>
    isOpen &&
    !backgroundColor &&
    css`
      padding-bottom: 0;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      padding-bottom: ${({ theme }) => theme.spacing(3)};
    `}
`;

export const StyledContent = styled.div<StyledProps>`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  word-break: break-word;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

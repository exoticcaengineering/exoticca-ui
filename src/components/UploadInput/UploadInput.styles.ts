import styled from 'styled-components';

import { TextBody2 } from '../TypographyVariants';

export const StyledInput = styled.input`
  all: unset;
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  width: 100%;
  text-overflow: ellipsis;
  ::placeholder {
    color: ${({ theme }) => theme.palette.primary.light};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  }
`;

export const Description = styled(TextBody2)`
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  color: ${({ theme }) => theme.palette.primary.medium};
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WrapperLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const ItemDescription = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.spacing(4)};
  & p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 18ch;
  }
  & :nth-child(2) {
    color: ${({ theme }) => theme.palette.primary.medium};
  }
`;

export const ProgressBarContainer = styled.div`
  border-radius: ${({ theme }) => theme.newBorderRadius.xxl};
  max-width: 150px;
  min-width: 150px;
  border: 1px solid ${({ theme }) => theme.palette.primary.medium};
`;

export const ErrorMessage = styled.li`
  color: ${({ theme }) => theme.palette.warning.main};
  list-style: none;
`;

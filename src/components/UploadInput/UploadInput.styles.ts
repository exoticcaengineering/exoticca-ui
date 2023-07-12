import styled from 'styled-components';

import { TextBody2 } from '../TypographyVariants';

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

export const Description = styled(TextBody2)`
  color: ${({ theme }) => theme.colors.polarNightMedium};
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
  justify-content: space-between;
  gap: 12px;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 18ch;
  }
  & :nth-child(2) {
    color: ${({ theme }) => theme.colors.polarNightMedium};
  }
`;

export const ProgressBarContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.polarNightMedium};
`;

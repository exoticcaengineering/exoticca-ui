import styled from 'styled-components';

export const StyledColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StyledRowWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

import styled from 'styled-components';

export const StyledRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  background: #c1c4c5;
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: baseline;
`;

export const StyledColumnWrapper = styled(StyledRowWrapper)`
  flex-direction: column;
`;

export const StyledModalHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.promotion.main};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  height: 75px;
`;

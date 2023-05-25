import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.polarNightLight};
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: baseline;
`;

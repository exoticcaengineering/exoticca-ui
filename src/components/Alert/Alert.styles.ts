import { Box } from 'src/components/Box';
import styled from 'styled-components';

export const StyledAlertWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledTextWrapper = styled.div`
  display: block;
`;

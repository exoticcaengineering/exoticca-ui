import { Box } from 'src/components/Box';
import styled from 'styled-components';

export const StyledAlertWrapper = styled(Box)`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing(1)};
`;

import { StyledProps } from 'src/components/Alert/Alert.types';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

export const StyledAlertWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledTextWrapper = styled.div`
  display: block;
`;

export const StyledText = styled(Typography)<StyledProps>`
  font-size: ${({ theme, rounded }) =>
    rounded
      ? theme.typography.fontSize.body2
      : theme.typography.fontSize.body3};
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.body2};
  }
  @media (min-width: ${({ theme }) => theme.newBreakpoints.desktop}) {
    font-size: ${({ theme, rounded }) =>
      rounded
        ? theme.typography.fontSize.body2
        : theme.typography.fontSize.body1};
  }
`;

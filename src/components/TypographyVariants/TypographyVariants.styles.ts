import styled from 'styled-components';
import { Typography } from 'src/components/Typography';

export const StyledDisplay1 = styled(Typography).attrs({
  fontSize: 'display2',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.display1};
  }
`;

export const StyledDisplay2 = styled(Typography).attrs({
  fontSize: 'heading1',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.display2};
  }
`;

export const StyledHeading1 = styled(Typography).attrs({
  fontSize: 'heading2',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.heading1};
  }
`;

export const StyledHeading2 = styled(Typography).attrs({
  fontSize: 'heading3',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.heading2};
  }
`;

export const StyledHeading3 = styled(Typography).attrs({
  fontSize: 'body1',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.heading3};
  }
  @media print {
    font-size: ${({ theme }) => theme.typography.printSize.heading3};
  }
`;

export const StyledBody1 = styled(Typography).attrs({
  fontSize: 'body1',
  lineHeight: 'normal',
})`
  @media print {
    font-size: ${({ theme }) => theme.typography.printSize.body1};
  }
`;

export const StyledBody2 = styled(Typography).attrs({
  fontSize: 'body2',
  lineHeight: 'normal',
})`
  @media print {
    font-size: ${({ theme }) => theme.typography.printSize.body2};
  }
`;

export const StyledBody3 = styled(Typography).attrs({
  fontSize: 'body3',
  lineHeight: 'tight',
})`
  @media print {
    font-size: ${({ theme }) => theme.typography.printSize.body3};
  }
`;

export const StyledBody4 = styled(Typography).attrs({
  lineHeight: 'tight',
})`
  @media print {
    font-size: ${({ theme }) => theme.typography.printSize.body4};
  }
`;

export const StyledBody5 = styled(Typography).attrs({
  lineHeight: 'tight',
})`
  @media print {
    font-size: ${({ theme }) => theme.typography.printSize.body5};
  }
`;

export const StyledButton1 = styled(Typography).attrs({
  fontSize: 'button2',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.button1};
  }
  @media print {
    font-size: ${({ theme }) => theme.typography.fontSize.button1};
  }
`;

export const StyledButton2 = styled(Typography).attrs({
  fontSize: 'button3',
  lineHeight: 'tight',
})`
  @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.button2};
  }
  @media print {
    font-size: ${({ theme }) => theme.typography.fontSize.button2};
  }
`;

export const StyledButton3 = styled(Typography).attrs({
  fontSize: 'button3',
  lineHeight: 'tight',
})``;

export const StyledCaption = styled(Typography).attrs({
  fontSize: 'caption',
  lineHeight: 'tight',
})``;

export const StyledOverline = styled(Typography).attrs({
  fontSize: 'overline',
  lineHeight: 'tight',
  textTransform: 'uppercase',
})``;

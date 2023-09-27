// import { StyledProps } from 'src/components/Alert/Alert.types';
// import { Box } from 'src/components/Box';
// import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { TextDisplay2, TextHeading3 } from '../TypographyVariants';
import { Button } from '../Button';

export const Wrapper = styled.section<{
  testId?: string;
  image?: string;
  height?: number;
}>`
  display: grid;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  background: ${({ image }) => (image ? `url(${image})` : 'grey')};
  background-position: center;
  background-size: cover;
  grid-template-columns: ${({ theme }) =>
    `${theme.spacing(4)} repeat(3, 1fr) ${theme.spacing(4)}`};
  grid-template-rows: ${({ theme }) =>
    `${theme.spacing(4)} repeat(3, 1fr) ${theme.spacing(4)}`};
`;

export const Title = styled(TextDisplay2)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ContentSection = styled.section<{ row: number; column: number }>`
  grid-row: ${({ row }) => row || 1};
  grid-column: ${({ column }) => column || 1};
  width: max-content;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

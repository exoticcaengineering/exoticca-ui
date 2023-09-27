import styled from 'styled-components';
import { TextDisplay2 } from '../TypographyVariants';
import type {
  StyledWrapperProps,
  StyledContentSectionProps,
} from './Banner.types';

export const Wrapper = styled.section<StyledWrapperProps>`
  display: grid;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  background: ${({ image }) => (image ? `url(${image})` : 'grey')};
  background-position: center;
  background-size: cover;
  grid-template-columns: ${({ theme, columns }) =>
    `${theme.spacing(4)} repeat(${columns}, 1fr) ${theme.spacing(4)}`};
  grid-template-rows: ${({ theme, rows }) =>
    `${theme.spacing(4)} repeat(${rows}, 1fr) ${theme.spacing(4)}`};
`;

export const Title = styled(TextDisplay2)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ContentSection = styled.section<StyledContentSectionProps>`
  grid-row: ${({ row }) => row || 1};
  grid-column: ${({ column }) => column || 1};
  width: max-content;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

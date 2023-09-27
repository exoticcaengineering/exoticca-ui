import styled from 'styled-components';
import { TextDisplay2 } from '../TypographyVariants';
import type { StyledWrapperProps } from './Grid.types';

export const Wrapper = styled.section<StyledWrapperProps>`
  display: grid;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  background-position: center;
  background-size: cover;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Title = styled(TextDisplay2)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

import styled from 'src/utils/styled';
import { StyledProps } from './Tabs.types';

export const StyledWrapper = styled.li<StyledProps>`
  display: table;
  table-layout: fixed;
  text-align: center;
  border-bottom: 1px solid black;
  width: 100%;
`;

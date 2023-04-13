import styled from 'styled-components';
import { Icon } from '../../Icon/Icon';

export const Row = styled.div`
  display: grid;
  width: 100%;
`;

export const Container = styled.ul`
  padding: 0;
`;

export const ParentButton = styled.button`
  all: unset;
  height: fit-content;
  width: auto;
`;

export const ChildrenIcon = styled(Icon)`
  margin-right: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

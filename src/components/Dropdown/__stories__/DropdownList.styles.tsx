import styled from 'styled-components';
import { Icon } from '../../Icon/Icon';

type Props = {
  position?: 'left' | 'right';
};
export const Row = styled.div<Props>`
  display: grid;
  grid-template-columns: auto 100%;
  direction: ${({ position }) => position === 'left' && 'rtl'}; ;
`;

export const Container = styled.ul`
  padding: 0;
`;

export const ParentButton = styled.button`
  all: unset;
  height: fit-content;
`;

export const ChildrenIcon = styled(Icon)`
  margin-right: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

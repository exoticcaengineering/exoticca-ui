import styled from 'styled-components';

export const SelectedIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(45deg) translate(-70%, 0%);
`;

import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;
`;

const SpinnerAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SpinnerElement = styled.div`
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #fff;
  transform-origin: 40px 40px;
  animation: ${SpinnerAnimation} 1.2s linear infinite;
`;

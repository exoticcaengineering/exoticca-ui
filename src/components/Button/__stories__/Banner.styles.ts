import { StylesProps } from './Banner.types';
import styled, { keyframes, css } from 'styled-components';

export const BannerWrapper = styled.div<StylesProps>`
  position: absolute;
  top: 1rem;
  left: ${(props) => props.left}px;
  width: 120px;
  height: 40px;
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 0.7rem;
  padding: 0 10px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 1s
        `
      : css`
          ${fadeOut} 1s
        `};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

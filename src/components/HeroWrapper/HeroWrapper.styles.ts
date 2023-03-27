import { css } from 'styled-components';
import styled from 'src/utils/styled';
import { StyledProps } from './HeroWrapper.types';

export const Wrapper = styled.div<StyledProps>`
  position: relative;
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-size: cover;
  background-position-x: ${({ backgroundPositionX = 'center' }) =>
    backgroundPositionX};
  background-position-y: ${({ backgroundPositionY = 'top' }) =>
    backgroundPositionY};

  ${({ fixedHeight }) => {
    // If fixedHeight is passed,use fix height for all screen sizes
    if (fixedHeight)
      return css`
        height: ${`${fixedHeight}px`};
      `;
    return css`
      height: 223px;
      @media (min-width: ${({ theme }) => theme.newBreakpoints.tablet}) {
        height: 236px;
      }

      @media (min-width: ${({ theme }) => theme.newBreakpoints.desktop}) {
        height: 384px;
      }
    `;
  }}
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

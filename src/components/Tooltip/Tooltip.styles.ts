import styled, { css } from 'styled-components';
import { Box } from 'src/components/Box';
import { Position, StyledProps } from './Tooltip.types';
import { arrowWidth } from './Tooltip.helpers';

export const StyledTooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 0;
`;

const calcRelativePosition = (position: Position) => {
  if (position === 'right') {
    return css`
      transform: translateY(-50%);
      &:before {
        top: 50%;
        left: -1px;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    `;
  }

  if (position === 'left') {
    return css`
      transform: translate(-100%, -50%);
      &:before {
        top: 50%;
        right: -1px;
        transform: translate(50%, -50%) rotate(135deg);
      }
    `;
  }

  if (position === 'top') {
    return css`
      transform: translate(-50%, -100%);
      &:before {
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 50%) rotate(225deg);
      }
    `;
  }

  if (position === 'top-left') {
    return css`
      transform: translate(calc(-100% + ${arrowWidth}px), -100%);
      &:before {
        bottom: -1px;
        right: 0;
        transform: translate(-100%, 50%) rotate(225deg);
      }
    `;
  }

  if (position === 'top-right') {
    return css`
      transform: translate(calc(0% - ${arrowWidth}px), -100%);
      &:before {
        bottom: -1px;
        left: 0;
        transform: translate(100%, 50%) rotate(225deg);
      }
    `;
  }
  if (position === 'bottom') {
    return css`
      transform: translate(-50%, 0);
      &:before {
        top: -1px;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    `;
  }
  if (position === 'bottom-left') {
    return css`
      transform: translate(calc(-100% + ${arrowWidth}px), 0);
      &:before {
        top: -1px;
        right: 0;
        transform: translate(-100%, -50%) rotate(45deg);
      }
    `;
  }
  if (position === 'bottom-right') {
    return css`
      transform: translate(calc(0% - ${arrowWidth}px), 0);
      &:before {
        top: -1px;
        left: 0;
        transform: translate(100%, -50%) rotate(45deg);
      }
    `;
  }
};

export const StyledTooltipPanel = styled(Box).attrs({
  padding: [2],
  borderWith: [1],
  borderColor: 'primary',
})<StyledProps>`
  position: absolute;
  max-width: 300px;
  top: ${({ coords = { top: 0, left: 0 } }) => `${coords?.top}px`};
  left: ${({ coords = { top: 0, left: 0 } }) => `${coords?.left}px`};
  color: ${(props) => props.theme.colors.primaryBlue40};
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border-left: 1px solid ${({ theme }) => theme.colors.primaryBlue40};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBlue40};
    border-radius: 2px 0 0 0;
  }
  ${({ position = 'right' }) => calcRelativePosition(position)}
`;

export const StyledTooltipTrigger = styled.div`
  cursor: pointer;
`;

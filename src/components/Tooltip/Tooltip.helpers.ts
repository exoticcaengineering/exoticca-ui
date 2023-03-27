// tooltip arrow is a rotated square with 16px width and height
// so the arrow is about 11px wide, and plus 4px space between the arrow and the trigger

import { CalcPositionParam } from './Tooltip.types';

export const arrowWidth = 12;
const gap = 4;

const arrowWithGap = arrowWidth + gap;

export const calcTopPosition = ({ rect, position }: CalcPositionParam) => {
  const zeroPositionY = rect.y + window.scrollY;
  if (
    position === 'bottom' ||
    position === 'bottom-left' ||
    position === 'bottom-right'
  )
    return zeroPositionY + rect.height + arrowWithGap;
  if (position === 'top' || position === 'top-left' || position === 'top-right')
    return zeroPositionY - arrowWithGap;

  // for left and right position, the arrow is in the middle of the trigger
  return zeroPositionY + rect.height / 2;
};

export const calcLeftPosition = ({ rect, position }: CalcPositionParam) => {
  if (position === 'right') return rect.x + rect.width + arrowWithGap;
  if (position === 'left') return rect.x - arrowWithGap;
  if (position === 'top' || position === 'bottom')
    return rect.x + rect.width / 2;

  if (position === 'top-left' || position === 'bottom-left')
    return rect.x + rect.width;
  //for top right and bottom right
  return rect.x;
};

import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';
import React from 'react';

export interface Coords {
  top: number;
  left: number;
}

export type Position =
  | 'bottom'
  | 'top'
  | 'right'
  | 'left'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface Props extends ComponentPropsBaseWithChildren {
  position: Position;
  content: string | React.ReactNode;
  triggerBy?: 'click' | 'hover';
}

export interface StyledProps extends Pick<Partial<Props>, 'position'> {
  coords?: Coords;
}

export interface CalculateSideParams {
  position: Position;
  coords: Coords;
}

export interface CalculateRelativePositionParams {
  position: Position;
  coords: Coords;
}

export interface CalcPositionParam {
  rect: DOMRect;
  position: Position;
}

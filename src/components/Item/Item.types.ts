import { Colors, Theme } from 'src/types';
import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';
import { SyntheticEvent, MouseEvent } from 'react';

import * as CSS from 'csstype';

type ItemColor = Extract<keyof Colors, 'arcticWind' | 'polarNight'>;

export type ItemSize = 'xSmall' | 'small' | 'medium' | 'large';

export interface Props extends ComponentPropsBaseWithChildren {
  hover?: 'underlined' | 'background' | 'underlined-bold';
  color?: ItemColor;
  selected?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: (
    event: SyntheticEvent<HTMLLIElement> | MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
  size?: ItemSize;
  layout?: CSS.Property.JustifyContent;
}

export interface StyledProps
  extends Pick<Props, 'hover' | 'color' | 'selected' | 'size' | 'layout'> {}

export interface SetColorParams extends Pick<Props, 'selected' | 'color'> {
  theme: Theme;
}

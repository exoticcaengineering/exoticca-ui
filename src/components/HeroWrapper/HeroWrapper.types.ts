import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';
import * as CSS from 'csstype';
export interface Props extends ComponentPropsBaseWithChildren {
  fixedHeight?: number;
  backgroundImg: string;
  backgroundPositionX?: CSS.Property.BackgroundPositionX;
  backgroundPositionY?: CSS.Property.BackgroundPositionY;
}

export interface StyledProps
  extends Pick<
    Props,
    | 'fixedHeight'
    | 'backgroundImg'
    | 'backgroundPositionX'
    | 'backgroundPositionY'
  > {}

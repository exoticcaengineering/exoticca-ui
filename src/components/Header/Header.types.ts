import { ComponentPropsBase } from 'src/types/ComponentPropsBase';
import { BoxProps } from 'src/components/Box/Box.types';

export interface Props
  extends ComponentPropsBase,
    Pick<BoxProps, 'background' | 'backgroundShade'> {
  leftComponent?: JSX.Element;
  centerComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

export interface StyledProps
  extends Pick<Props, 'background' | 'backgroundShade'> {}

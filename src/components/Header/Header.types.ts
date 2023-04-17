type BackgroundType = 'transparent' | 'solid';

export interface Props {
  leftComponent?: JSX.Element;
  centerComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  backgroundType?: BackgroundType;
}

export interface StyledProps extends Pick<Props, 'backgroundType'> {}

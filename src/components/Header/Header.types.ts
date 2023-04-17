type BackgroundType = 'transparent' | 'solid';

export interface Props {
  leftComponent?: () => React.ReactNode;
  centerComponent?: () => React.ReactNode;
  rightComponent?: () => React.ReactNode;
  backgroundType?: BackgroundType;
}

export interface StyledProps extends Pick<Props, 'backgroundType'> {}

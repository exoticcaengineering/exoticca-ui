import { FC } from 'react';
import { StyledWrapper } from './LandingBox.styles';
import { Props } from './LandingBox.types';

export const LandingBox: FC<Props> = ({
  children,
  topLineColor,
  as,
  ...boxProps
}) => {
  return (
    <StyledWrapper
      padding={[4, 1, 8, 1]}
      topLineColor={topLineColor}
      forwardedAs={as}
      {...boxProps}
    >
      {children}
    </StyledWrapper>
  );
};

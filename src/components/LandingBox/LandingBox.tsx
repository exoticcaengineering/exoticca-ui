import { FC } from 'react';
import { StyledWrapper } from './LandingBox.styles';
import { Props } from './LandingBox.types';

export const LandingBox: FC<Props> = ({
  children,
  topLineColor,
  ...boxProps
}) => {
  return (
    <StyledWrapper
      background="primaryBlue05"
      padding={[4, 1, 8, 1]}
      topLineColor={topLineColor}
      {...boxProps}
    >
      {children}
    </StyledWrapper>
  );
};

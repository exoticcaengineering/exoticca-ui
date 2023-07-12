import { FC } from 'react';
import { Props } from './Loader.types';
import { StyledLoadingDot, StyledLoadingDotsWrapper } from './Loader.styles';

const dotsArray = Array.from(Array(4));

export const Loader: FC<Props> = ({ color, colorShade, className, testId }) => {
  return (
    <StyledLoadingDotsWrapper
      color={color}
      colorShade={colorShade}
      data-testid={testId || 'loading_dots'}
      className={className}
    >
      {dotsArray.map((_, index) => (
        <StyledLoadingDot key={index} dotIndicator={index + 1} />
      ))}
    </StyledLoadingDotsWrapper>
  );
};

import { FC } from 'react';
import { Props } from './RecommendedBox.types';
import {
  StyledBox,
  StyledRecommendedTag,
  StyledWrapper,
} from './RecommendedBox.styles';
import { TextBody2 } from '../TypographyVariants';

export const RecommendedBox: FC<Props> = ({
  children,
  color,
  colorShade,
  recommendationText,
  ...boxProps
}) => {
  return (
    <StyledWrapper>
      <StyledBox
        color={color}
        colorShade={colorShade}
        borderWidth={1}
        padding={[2]}
        {...boxProps}
      >
        {children}
      </StyledBox>
      <StyledRecommendedTag>
        <TextBody2 align="center">{recommendationText}</TextBody2>
      </StyledRecommendedTag>
    </StyledWrapper>
  );
};

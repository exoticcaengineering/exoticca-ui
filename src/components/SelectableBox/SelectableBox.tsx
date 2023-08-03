import { FC } from 'react';
import { Props } from './SelectableBox.types';
import {
  SelectedIconWrapper,
  StyledBox,
  StyledRecommendedTag,
  StyledWrapper,
} from './SelectableBox.styles';
import { Icon } from '../Icon';
import { TextBody2 } from '../TypographyVariants';

export const SelectableBox: FC<Props> = ({
  isSelected,
  children,
  highlightColor = 'promotion',
  highlightColorShade = 'main',
  highlightText,
  ...boxProps
}) => {
  const hasHighlight = !!highlightText;
  const getBorderColor = () => {
    if (isSelected) return 'primary';
    if (hasHighlight) return highlightColor;
    return 'primary';
  };

  const getBorderShade = () => {
    if (isSelected) return 'main';
    if (hasHighlight) return highlightColorShade;
    return 'light';
  };

  return (
    <StyledWrapper>
      <StyledBox
        borderColor={getBorderColor()}
        borderColorShade={getBorderShade()}
        borderWidth={1}
        padding={[2]}
        {...boxProps}
      >
        {children}
        {isSelected && (
          <SelectedIconWrapper>
            <Icon
              icon="check"
              stroke="background"
              strokeShade="main"
              rotate={-45}
            />
          </SelectedIconWrapper>
        )}
      </StyledBox>
      {hasHighlight && (
        <StyledRecommendedTag
          highlightColor={highlightColor}
          highlightColorShade={highlightColorShade}
        >
          <TextBody2 align="center">{highlightText}</TextBody2>
        </StyledRecommendedTag>
      )}
    </StyledWrapper>
  );
};

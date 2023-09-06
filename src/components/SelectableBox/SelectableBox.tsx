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
  testId = 'selectable-box',
  className,
  ...boxProps
}) => {
  const hasHighlight = !!highlightText;

  const getBorderShade = () => {
    if (isSelected) return 'main';
    return 'light';
  };

  const isClickable = !!boxProps.onClick;

  return (
    <StyledWrapper data-testid={`${testId}-wrapper`} className={className}>
      <StyledBox
        borderColor="primary"
        borderColorShade={getBorderShade()}
        borderWidth={1}
        padding={[2]}
        isClickable={isClickable}
        isSelected={isSelected}
        testId={testId}
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
              size="small"
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

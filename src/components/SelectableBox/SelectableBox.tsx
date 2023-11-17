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

  highlightConfig,
  testId = 'selectable-box',
  className,
  as,
  ...boxProps
}) => {
  const {
    highlightColor = 'promotion',
    highlightColorShade = 'main',
    highlightText,
    highlightTextWrap = true,
  } = highlightConfig ?? {};

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
        forwardedAs={as}
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
          <TextBody2 align="center" noWrap={!!highlightTextWrap}>
            {highlightText}
          </TextBody2>
        </StyledRecommendedTag>
      )}
    </StyledWrapper>
  );
};

import { FC, useEffect, useId, useState } from 'react';
import { Props } from './RadioButton.types';
import {
  StyledLabel,
  StyledRadioButton,
  StyledRadioButtonInner,
  StyledRadioButtonWrapper,
  StyledTextIconWrapper,
} from './RadioButton.styles';
import { TextBody1 } from '../TypographyVariants';
import { Flex } from '../Flex';

export const RadioButton: FC<Props> = ({
  testId,
  checked,
  onChange,
  label,
  startIcon,
  endIcon,
  disabled,
  value,
}) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <StyledRadioButtonWrapper data-testid={testId} disabled={disabled}>
      <input
        type="radio"
        name={id}
        id={id}
        onChange={handleOnChange}
        hidden
        checked={isChecked}
        disabled={disabled}
        value={value}
      />
      <StyledLabel htmlFor={id}>
        <StyledRadioButton
          isChecked={isChecked}
          disabled={disabled}
          data-testid="radio-button-circle"
        >
          <StyledRadioButtonInner data-testid="radio-button-circle-inner" />
        </StyledRadioButton>
        <StyledTextIconWrapper>
          {!!startIcon && startIcon}

          <TextBody1>{label}</TextBody1>

          {!!endIcon && endIcon}
        </StyledTextIconWrapper>
      </StyledLabel>
    </StyledRadioButtonWrapper>
  );
};

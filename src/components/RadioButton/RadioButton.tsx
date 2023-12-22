import { FC, useEffect, useState } from 'react';
import { Props } from './RadioButton.types';
import {
  StyledRadioButton,
  StyledRadioButtonInner,
  StyledRadioButtonWrapper,
} from './RadioButton.styles';
import { TextBody1 } from '../TypographyVariants';

export const RadioButton: FC<Props> = ({
  testId,
  checked,
  onChange,
  label,
  startIcon,
  endIcon,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.checked', e.target.checked);

    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <StyledRadioButtonWrapper data-testid={testId}>
      <StyledRadioButton isChecked={isChecked}>
        <StyledRadioButtonInner />
      </StyledRadioButton>
      {!!startIcon && startIcon}
      <input
        type="radio"
        name="radio"
        id="radio"
        onChange={handleOnChange}
        hidden
      />
      <label htmlFor="radio">
        <TextBody1>{label}</TextBody1>{' '}
      </label>
      {!!endIcon && endIcon}
    </StyledRadioButtonWrapper>
  );
};

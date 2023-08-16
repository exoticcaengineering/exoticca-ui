import { FC, useEffect, useState } from 'react';
import { Spinner } from '../Spinner';
import { Props } from './Checkbox.types';
import {
  StyledCheckBox,
  StyledCheckboxWrapper,
  StyledInputCheckbox,
  StyledLabel,
} from './Checkbox.styles';

export const Checkbox: FC<Props> = ({
  label,
  customLabel,
  name,
  defaultChecked,
  disabled,
  error,
  onChange,
  isLoading,
  testId = 'checkbox',
  className,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLoading) return;
    setChecked(e.target.checked);
    onChange?.(e);
  };

  const renderLabel = () => {
    if (customLabel) return customLabel;
    if (label)
      return <StyledLabel dangerouslySetInnerHTML={{ __html: label }} />;
  };

  return (
    <StyledCheckboxWrapper
      htmlFor={name}
      data-testid={testId}
      error={error}
      disabled={disabled}
      className={className}
    >
      <StyledInputCheckbox
        onChange={handleOnChange}
        checked={checked}
        disabled={disabled}
        name={name}
        error={error}
        aria-label={name}
        id={name}
      />
      {isLoading ? (
        <Spinner size="regular" />
      ) : (
        <StyledCheckBox data-testid={'checkbox__checkmark'} error={error} />
      )}
      {renderLabel()}
    </StyledCheckboxWrapper>
  );
};

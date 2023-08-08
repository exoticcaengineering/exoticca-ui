import { FC } from 'react';
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
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        checked={defaultChecked}
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

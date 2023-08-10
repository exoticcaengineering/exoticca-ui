import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import {
  StyledEndIcon,
  StyledErrorMessage,
  StyledInput,
  StyledInputInner,
  StyledInputWrapper,
  StyledLabel,
  StyledOutsideLabel,
  StyledStartIcon,
} from './Input.styles';
import { Props } from './Input.types';

export const Input: FC<Props> = ({
  startIcon,
  endIcon,
  label,
  labelPosition = 'outside',
  rounded = 'both',
  onChange,
  defaultValue,
  onClick,
  className,
  testId = 'input',
  errorMessage,
  name,
  type = 'text',
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(defaultValue ?? '');

  const hasStartIcon = !!startIcon?.icon;
  const hasEndIcon = !!endIcon?.icon;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    inputRef.current?.focus();
    onClick?.(e);
  };

  useEffect(() => {
    setValue(defaultValue ?? '');
  }, [defaultValue]);

  return (
    <div>
      {labelPosition === 'outside' && (
        <StyledOutsideLabel>{label}</StyledOutsideLabel>
      )}
      <StyledInputWrapper
        tabIndex={0}
        rounded={rounded}
        hasStartIcon={hasStartIcon}
        hasEndIcon={hasEndIcon}
        labelPosition={labelPosition}
        onClick={handleOnClick}
        className={className}
        data-testid={testId}
      >
        {startIcon && (
          <StyledStartIcon stroke="primary" size={'regular'} {...startIcon} />
        )}
        <StyledInputInner>
          {value === '' && labelPosition === 'inside' && (
            <StyledLabel>{label}</StyledLabel>
          )}
          <StyledInput
            data-testid="input"
            ref={inputRef}
            type={type}
            value={value}
            onChange={handleOnChange}
            name={name || label}
            {...inputProps}
          />
        </StyledInputInner>
        {endIcon && (
          <StyledEndIcon stroke="primary" size={'regular'} {...endIcon} />
        )}
      </StyledInputWrapper>
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </div>
  );
};

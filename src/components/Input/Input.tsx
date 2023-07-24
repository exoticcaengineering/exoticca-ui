import { ChangeEvent, useRef } from 'react';
import {
  StyledIcon,
  StyledInput,
  StyledInputInner,
  StyledInputWrapper,
  StyledLabel,
  StyledOutsideLabel,
} from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({
  icon,
  label,
  labelPosition = 'outside',
  placeholder,
  rounded,
  setValue,
  value,
  onClick,
  readOnly,
  disabled,
  className,
  testId = 'input',
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const hasIcon = !!icon;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    inputRef.current?.focus();
    onClick?.(e);
  };

  return (
    <>
      {labelPosition === 'outside' && (
        <StyledOutsideLabel>{label}</StyledOutsideLabel>
      )}
      <StyledInputWrapper
        tabIndex={0}
        rounded={rounded}
        hasIcon={hasIcon}
        onClick={handleOnClick}
        className={className}
        data-testid={testId}
      >
        {icon && <StyledIcon icon={icon} stroke="primary" size={'regular'} />}
        <StyledInputInner>
          {value === '' && labelPosition === 'inside' && (
            <StyledLabel>{label}</StyledLabel>
          )}
          <StyledInput
            ref={inputRef}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
          />
        </StyledInputInner>
      </StyledInputWrapper>
    </>
  );
};

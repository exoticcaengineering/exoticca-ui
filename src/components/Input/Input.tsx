import { ChangeEvent, useRef } from 'react';
import {
  StyledIcon,
  StyledInput,
  StyledInputInner,
  StyledInputWrapper,
  StyledLabel,
} from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({
  icon,
  label,
  placeholder,
  rounded,
  setValue,
  value,
  onClick,
  readOnly,
  disabled,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    inputRef.current?.focus();
    onClick?.(e);
  };

  return (
    <StyledInputWrapper
      tabIndex={0}
      rounded={rounded}
      icon={icon}
      onClick={handleOnClick}
    >
      {icon && (
        <StyledIcon icon={icon} stroke={'polarNight'} size={'regular'} />
      )}
      <StyledInputInner>
        {value === '' && <StyledLabel icon={icon}>{label}</StyledLabel>}
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
  );
};

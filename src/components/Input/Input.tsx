import { ChangeEvent } from 'react';
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
}: InputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInputWrapper tabIndex={0} rounded={rounded} icon={icon}>
      {icon && (
        <StyledIcon icon={icon} stroke={'polarNight'} size={'regular'} />
      )}
      <StyledInputInner>
        {value === '' && <StyledLabel icon={icon}>{label}</StyledLabel>}
        <StyledInput
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClick={(e) => onClick?.(e)}
        />
      </StyledInputInner>
    </StyledInputWrapper>
  );
};

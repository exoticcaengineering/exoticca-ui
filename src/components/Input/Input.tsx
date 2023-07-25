import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import {
  StyledIcon,
  StyledInput,
  StyledInputInner,
  StyledInputWrapper,
  StyledLabel,
  StyledOutsideLabel,
} from './Input.styles';
import { Props } from './Input.types';

export const Input: FC<Props> = ({
  startIcon,
  label,
  labelPosition = 'outside',
  rounded = 'both',
  onChange,
  defaultValue,
  onClick,
  className,
  testId = 'input',
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(defaultValue ?? '');

  const hasIcon = !!startIcon?.icon;

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
    if (!defaultValue) return;
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div>
      {labelPosition === 'outside' && (
        <StyledOutsideLabel>{label}</StyledOutsideLabel>
      )}
      <StyledInputWrapper
        tabIndex={0}
        rounded={rounded}
        hasIcon={hasIcon}
        labelPosition={labelPosition}
        onClick={handleOnClick}
        className={className}
        data-testid={testId}
      >
        {startIcon && (
          <StyledIcon stroke="primary" size={'regular'} {...startIcon} />
        )}
        <StyledInputInner>
          {value === '' && labelPosition === 'inside' && (
            <StyledLabel>{label}</StyledLabel>
          )}
          <StyledInput
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleOnChange}
            {...inputProps}
          />
        </StyledInputInner>
      </StyledInputWrapper>
    </div>
  );
};

import { useEffect, useRef, useState } from 'react';
import {
  StyledDropDown,
  StyledDropDownInner,
  StyledFilter,
} from './FilterInput.styles';
import { Input } from '../Input';
import { useOnClickOutside } from 'src/hooks';
import { InputFilterProps } from '../Input.types';

export const FilterInput = ({
  icon,
  label,
  placeholder,
  rounded,
  setValue,
  value,
  children,
  selectedValue,
  inputRef,
  onClick,
}: InputFilterProps) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    onClick?.();
    setDropdownIsOpen(true);
  };
  const closeDropdown = () => setDropdownIsOpen(false);

  useOnClickOutside(dropdownRef, closeDropdown);

  useEffect(() => {
    console.log(selectedValue);
    closeDropdown();
  }, [selectedValue]);

  return (
    <StyledFilter ref={dropdownRef}>
      <Input
        inputRef={inputRef}
        icon={icon}
        label={label}
        placeholder={placeholder}
        rounded={rounded}
        setValue={setValue}
        value={value}
        onClick={handleClick}
      />
      {dropdownIsOpen && (
        <StyledDropDown>
          <StyledDropDownInner>{children}</StyledDropDownInner>
        </StyledDropDown>
      )}
    </StyledFilter>
  );
};

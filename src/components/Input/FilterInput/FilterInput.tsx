import { useRef, useState } from 'react';
import {
  StyledDropDown,
  StyledDropDownInner,
  StyledFilter,
} from './FilterInput.styles';
import { Input } from '../Input';
import { useOnClickOutside } from 'src/hooks';
import { InputFilterProps } from './FilterInput.types';

export const FilterInput = ({
  inputList,
  onClick,
  ...inputProps
}: InputFilterProps) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setDropdownIsOpen(true);
    onClick?.(e);
  };
  const closeDropdown = () => setDropdownIsOpen(false);

  useOnClickOutside(dropdownRef, closeDropdown);

  return (
    <StyledFilter ref={dropdownRef}>
      <Input onClick={handleClick} {...inputProps} />
      {dropdownIsOpen && (
        <StyledDropDown>
          <StyledDropDownInner>
            {inputList({
              closeDropdown,
            })}
          </StyledDropDownInner>
        </StyledDropDown>
      )}
    </StyledFilter>
  );
};

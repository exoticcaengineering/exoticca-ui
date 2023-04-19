import { useState } from 'react';
import {
  StyledDropDown,
  StyledDropDownInner,
  StyledFilter,
} from './FilterInput.styles';
import { Input } from '../Input';

export const FilterInput = ({
  icon,
  label,
  placeholder,
  rounded,
  setValue,
  value,
  children,
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const onClick = () => {
    setDropdownIsOpen(true);
  };

  return (
    <StyledFilter>
      <Input
        icon={icon}
        label={label}
        placeholder={placeholder}
        rounded={rounded}
        setValue={setValue}
        value={value}
        onClick={onClick}
      />
      {dropdownIsOpen && (
        <StyledDropDown>
          <StyledDropDownInner>{children}</StyledDropDownInner>
        </StyledDropDown>
      )}
    </StyledFilter>
  );
};

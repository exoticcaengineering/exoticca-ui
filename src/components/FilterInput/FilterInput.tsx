import { FC, useRef, useState } from 'react';
import {
  StyledDropDown,
  StyledDropDownInner,
  StyledFilter,
} from './FilterInput.styles';
import { Input } from '../Input/Input';
import { useOnClickOutside } from 'src/hooks';
import { Props } from './FilterInput.types';

export const FilterInput: FC<Props> = ({
  inputList,
  onClick,
  testId = 'filter-input',
  labelPosition = 'inside',
  disableWriting = false,
  ...inputProps
}) => {
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
      <Input
        onClick={handleClick}
        testId={testId}
        {...inputProps}
        readOnly={disableWriting}
        labelPosition={labelPosition}
      />
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

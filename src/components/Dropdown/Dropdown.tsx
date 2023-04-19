import { FC, useRef, useState } from 'react';
import {
  StyledDropdownButton,
  CloseIcon,
  CloseWrapper,
  StyledDropdownWrapper,
  StyledDropdownList,
} from './Dropdown.styles';
import { DropDownPosition, Props } from './Dropdown.types';
import { BorderRadius } from 'src/types/theme';
import { useOnClickOutside } from 'src/hooks';

export const Dropdown: FC<Props> = ({
  children,
  position = 'right',
  withCloseButton,
  text,
  size = 'medium',
  startIcon,
  originalIconColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = () => setIsOpen(false);

  useOnClickOutside(dropdownRef, closeDropdown);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setBorderRadius = (
    position: DropDownPosition,
  ): Array<keyof BorderRadius> => {
    if (position === 'left') return ['l', 'none', 'l', 'l'];

    return ['none', 'l', 'l', 'l'];
  };

  return (
    <StyledDropdownWrapper ref={dropdownRef}>
      <StyledDropdownButton
        onClick={toggleDropdown}
        endIcon={isOpen ? 'arrowUp' : 'arrowDown'}
        isOpen={isOpen}
        color={isOpen ? 'black' : 'white'}
        text={text}
        variant="tertiary"
        size={size}
        startIcon={startIcon}
        originalIconColor={originalIconColor}
      />

      {isOpen && (
        <StyledDropdownList
          position={position}
          background="arcticWind"
          padding={[1.5, 2]}
          borderRadius={setBorderRadius(position)}
        >
          {withCloseButton && (
            <CloseWrapper position={position} onClick={closeDropdown}>
              <CloseIcon icon={'close'} />
            </CloseWrapper>
          )}
          {children}
        </StyledDropdownList>
      )}
    </StyledDropdownWrapper>
  );
};

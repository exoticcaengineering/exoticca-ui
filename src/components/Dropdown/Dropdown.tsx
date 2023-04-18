import { FC, useRef, useState } from 'react';
import {
  DropdownButton,
  DropdownList,
  CloseIcon,
  CloseWrapper,
  StyledDropdownWrapper,
} from './Dropdown.styles';
import { DropDownPosition, Props } from './Dropdown.types';
import { BorderRadius } from 'src/types/theme';
import { useOnClickOutside } from 'src/hooks';

export const Dropdown: FC<Props> = ({
  children,
  position = 'right',
  withCloseButton,
  buttonText,
  size = 'medium',
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
      <DropdownButton
        isOpen={isOpen}
        onClick={toggleDropdown}
        text={buttonText}
        size={size}
        rightIcon={isOpen ? 'arrowUp' : 'arrowDown'}
      />
      {isOpen && (
        <DropdownList
          position={position}
          background="arcticWind"
          padding={[1.5, 2.875]}
          borderRadius={setBorderRadius(position)}
        >
          {withCloseButton && (
            <CloseWrapper position={position} onClick={toggleDropdown}>
              <CloseIcon icon={'close'} />
            </CloseWrapper>
          )}
          {children}
        </DropdownList>
      )}
    </StyledDropdownWrapper>
  );
};

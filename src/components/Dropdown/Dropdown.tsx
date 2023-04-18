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
import { getIconSize, getTextComponentBySize } from './Dropdown.helpers';

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

  const TextComponent = getTextComponentBySize(size);

  const iconSize = getIconSize(size);

  return (
    <StyledDropdownWrapper ref={dropdownRef}>
      <DropdownButton
        onClick={toggleDropdown}
        endIcon={isOpen ? 'arrowUp' : 'arrowDown'}
        iconSize={iconSize}
        hover="underlined-bold"
        isOpen={isOpen}
      >
        <TextComponent>{buttonText}</TextComponent>
      </DropdownButton>

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

import { FC, useRef, useState } from 'react';
import {
  DropdownButton,
  CloseIcon,
  CloseWrapper,
  StyledDropdownWrapper,
  StyledDropdownList,
} from './Dropdown.styles';
import { DropDownPosition, Props } from './Dropdown.types';
import { BorderRadius } from 'src/types/theme';
import { useOnClickOutside } from 'src/hooks';
import { getIconSize, getTextComponentBySize } from './Dropdown.helpers';
import { ItemIconConfig } from '../Item';

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

  const iconConfig: ItemIconConfig = {
    name: isOpen ? 'arrowUp' : 'arrowDown',
    size: iconSize,
    stroke: isOpen ? 'polarNight' : 'arcticWind',
  };

  return (
    <StyledDropdownWrapper ref={dropdownRef}>
      <DropdownButton
        onClick={toggleDropdown}
        endIcon={iconConfig}
        hover="underlined-bold"
        isOpen={isOpen}
        color={isOpen ? 'polarNight' : 'arcticWind'}
      >
        <TextComponent>{buttonText}</TextComponent>
      </DropdownButton>

      {isOpen && (
        <StyledDropdownList
          position={position}
          background="arcticWind"
          padding={[1.5, 2]}
          borderRadius={setBorderRadius(position)}
        >
          {withCloseButton && (
            <CloseWrapper position={position} onClick={toggleDropdown}>
              <CloseIcon icon={'close'} />
            </CloseWrapper>
          )}
          {children}
        </StyledDropdownList>
      )}
    </StyledDropdownWrapper>
  );
};

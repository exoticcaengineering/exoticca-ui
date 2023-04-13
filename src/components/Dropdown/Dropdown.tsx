import { useState } from 'react';
import {
  DropdownButton,
  IconArrow,
  DropdownList,
  CloseIcon,
  CloseWrapper,
} from './Dropdown.styles';
import { Item } from '../Item/Item';
import { DropdownProps } from './Dropdown.types';

export const Dropdown = ({
  children,
  position = 'right',
  withCloseButton,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setBorderRadius = (position: 'left' | 'right') => {
    if (position === 'left') return ['l', 'none', 'l', 'l'];

    return ['none', 'l', 'l', 'l'];
  };

  return (
    <div style={{ position: 'relative' }}>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        <Item
          hover="underlined-bold"
          color={isOpen ? 'polarNight' : 'arcticWind'}
        >
          Dropdown
          <IconArrow
            isOpen={isOpen}
            icon={'arrow'}
            stroke={isOpen ? 'polarNight' : 'arcticWind'}
          />
        </Item>
      </DropdownButton>
      {isOpen && (
        <DropdownList
          position={position}
          background="arcticWind"
          padding={[1.5, 2.875]}
          borderRadius={setBorderRadius(position)}
        >
          {withCloseButton && (
            <CloseWrapper onClick={toggleDropdown}>
              <CloseIcon icon={'close'} />
            </CloseWrapper>
          )}
          {children}
        </DropdownList>
      )}
    </div>
  );
};

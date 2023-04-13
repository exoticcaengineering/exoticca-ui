import { useState } from 'react';
import { DropdownButton, IconArrow, DropdownList } from './Dropdown.styles';
import { Item } from '../Item/Item';
import { DropdownProps } from './Dropdown.types';

export const Dropdown = ({ children, position = 'right' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
          background="arcticWind"
          padding={[1.5, 2.875]}
          borderRadius={['none', 'l', 'l', 'l']}
        >
          {children}
        </DropdownList>
      )}
    </>
  );
};

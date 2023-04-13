import { useState } from 'react';
import { DropdownButton, IconArrow, DropdownList } from './Dropdown.styles';
import { Item } from '../Item/Item';

/* export const Dropdown: FC<MenuPropsType> = ({ items }) => {
  return (
    <ul>
      {items.map((item: JSX.IntrinsicAttributes & DropdownListProps) => (
        <DropdownList key={item.text} {...item} />
      ))}
    </ul>
  );
}; */

export const Dropdown = ({ children }: any) => {
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

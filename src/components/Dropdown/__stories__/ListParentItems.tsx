import { Item } from 'src/components/Item/Item';
import { ListParentItemsProps } from '../Dropdown.types';
import { ParentButton } from './DropdownList.styles';

export const ListParentItems = ({
  subItem,
  setIsSelected,
  isSelected,
  setChildrenItems,
}: ListParentItemsProps) => {
  const handleClick = () => {
    if (isSelected === subItem.parent.name) return setIsSelected('');
    setIsSelected(subItem.parent.name);
    setChildrenItems(subItem);
  };

  return (
    <ParentButton onClick={handleClick}>
      <Item hover="background" selected={isSelected === subItem.parent.name}>
        {subItem.parent.name}
      </Item>
    </ParentButton>
  );
};

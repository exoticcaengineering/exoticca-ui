import { Item } from 'src/components/Item/Item';

import { ParentButton } from './DropdownList.styles';
import { ListParentItemsProps } from './Story.types';

export const ListParentItems = ({
  subItem,
  setIsSelected,
  isSelected,
  setChildrenItems,
  inverseStyle,
}: ListParentItemsProps) => {
  console.log('inverseStyle', inverseStyle);

  const handleClick = () => {
    if (isSelected === subItem.parent.name) return setIsSelected('');
    setIsSelected(subItem.parent.name);
    setChildrenItems(subItem);
  };

  return (
    <ParentButton onClick={handleClick}>
      <Item
        hover="background"
        selected={isSelected === subItem.parent.name}
        color={inverseStyle ? 'arcticWind' : 'polarNight'}
      >
        {subItem.parent.name}
      </Item>
    </ParentButton>
  );
};

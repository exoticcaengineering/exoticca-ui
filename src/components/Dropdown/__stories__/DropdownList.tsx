import { useState } from 'react';

import { Row, Wrapper } from './DropdownList.styles';
import { ListChildrenItems } from './ListChildrenItems';
import { ListParentItems } from './ListParentItems';
import { DropdownListProps, SubMenuItem } from './Story.types';

export const DropdownList = ({ subMenuItems, position }: DropdownListProps) => {
  const [isSelected, setIsSelected] = useState('');
  const [childrenItems, setChildrenItems] = useState<SubMenuItem | null>(null);

  return (
    <Row position={position}>
      <Wrapper>
        {subMenuItems.map((subItem) => (
          <ListParentItems
            key={subItem.parent.name}
            subItem={subItem}
            setIsSelected={setIsSelected}
            isSelected={isSelected}
            setChildrenItems={setChildrenItems}
          />
        ))}
      </Wrapper>
      {childrenItems && childrenItems.children.items.length !== 0 && (
        <ListChildrenItems
          isSelected={isSelected}
          childrenItems={childrenItems}
        />
      )}
    </Row>
  );
};

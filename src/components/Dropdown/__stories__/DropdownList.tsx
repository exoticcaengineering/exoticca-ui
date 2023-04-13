import { useState } from 'react';
import { Item } from '../../Item/Item';
import {
  DropdownListProps,
  ListChildrenItemsProps,
  ListParentItemsProps,
  SubMenuItem,
} from './../Dropdown.types';
import {
  ChildrenIcon,
  Container,
  ParentButton,
  Row,
  Wrapper,
} from './DropdownList.styles';

export const DropdownList = ({ subMenuItems }: DropdownListProps) => {
  const [isSelected, setIsSelected] = useState('');
  const [childrenItems, setChildrenItems] = useState<SubMenuItem | null>(null);

  return (
    <Container>
      <Row>
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
        {childrenItems && childrenItems.children.length !== 0 && (
          <ListChildrenItems
            isSelected={isSelected}
            childrenItems={childrenItems}
          />
        )}
      </Row>
    </Container>
  );
};

const ListParentItems = ({
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

const ListChildrenItems = ({
  isSelected,
  childrenItems,
}: ListChildrenItemsProps) => {
  return (
    <>
      {isSelected === childrenItems.parent.name && (
        <Container
          style={{
            gridColumnStart: 2,
          }}
        >
          <Item hover="underlined">
            <p>{childrenItems.parent.name}</p>
          </Item>
          <Container
            style={{
              gridColumnStart: 2,
            }}
          >
            {childrenItems.children.map((subItem) => (
              <Item key={subItem.name} hover="underlined">
                <a href={subItem.slug}>
                  <ChildrenIcon icon={'arrow'} />
                  {subItem.name}
                </a>
              </Item>
            ))}
          </Container>
        </Container>
      )}
    </>
  );
};

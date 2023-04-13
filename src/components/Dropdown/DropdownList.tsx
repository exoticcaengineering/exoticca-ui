import { useState } from 'react';
import { Item } from '../Item/Item';
import { DropdownListProps } from './Dropdown.types';
import {
  Row,
  Container,
  ParentButton,
  ChildrenIcon,
} from './DropdownList.styles';

export const DropdownList = ({ subMenuItems }: DropdownListProps) => {
  return (
    <Container>
      {subMenuItems.map((subItem) => (
        <div key={subItem.parent.name} style={{ width: 'auto' }}>
          <Row key={subItem.parent.name}>
            <ListItems subItem={subItem} />
          </Row>
        </div>
      ))}
    </Container>
  );
};

const ListItems = ({ subItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ParentButton onClick={() => setIsOpen(!isOpen)}>
        <Item hover="background" selected={isOpen}>
          {subItem.parent.name}
        </Item>
      </ParentButton>
      {isOpen && subItem.children && (
        <Container style={{ gridColumnStart: 2 }}>
          {subItem.children.map((subItem) => (
            <Item key={subItem.name} hover="underlined">
              <a href={subItem.slug}>
                <ChildrenIcon icon={'arrow'} />
                {subItem.name}
              </a>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};

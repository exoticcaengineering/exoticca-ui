import { Item } from 'src/components/Item/Item';
import { ListChildrenItemsProps } from '../Dropdown.types';
import { ChildrenIcon, Container, Title } from './DropdownList.styles';

export const ListChildrenItems = ({
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
          <Title>{childrenItems.children.title}</Title>

          {childrenItems.children.items.map((subItem) => (
            <Item key={subItem.name} hover="underlined">
              <a href={subItem.slug} style={{ whiteSpace: 'nowrap' }}>
                <ChildrenIcon icon={'arrowUp'} />
                {subItem.name}
              </a>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};

import { Item } from 'src/components/Item/Item';
import { ListChildrenItemsProps } from '../Dropdown.types';
import { ChildrenIcon, Container } from './DropdownList.styles';

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
          <Item hover="underlined">
            <p>{childrenItems.parent.name}</p>
          </Item>

          {childrenItems.children.items.map((subItem) => (
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

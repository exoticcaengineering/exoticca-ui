import { Item } from 'src/components/Item/Item';

import { ChildrenIcon, Container, Title } from './DropdownList.styles';
import { ListChildrenItemsProps } from './Story.types';
import { ArrowIcon } from 'src/components/SvgIcons/Arrow';

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
                <ChildrenIcon>
                  <ArrowIcon />
                </ChildrenIcon>
                {subItem.name}
              </a>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};

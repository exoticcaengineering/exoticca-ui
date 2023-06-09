import { Item } from 'src/components/Item/Item';

import { ChildrenIcon, Container, Title } from './DropdownList.styles';
import { ListChildrenItemsProps } from './Story.types';

export const ListChildrenItems = ({
  isSelected,
  childrenItems,
  darkMode,
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
            <Item
              key={subItem.name}
              hover="underlined"
              color={darkMode ? 'arcticWind' : 'polarNight'}
            >
              <a href={subItem.slug} style={{ whiteSpace: 'nowrap' }}>
                <ChildrenIcon icon="arrow" />
                {subItem.name}
              </a>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};

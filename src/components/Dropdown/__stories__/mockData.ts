import { MenuItems } from './Story.types';

export const menuItems: MenuItems[] = [
  [
    {
      title: 'Dropdown',
      items: [
        {
          parent: {
            name: 'Components',
          },
          children: {
            title: 'Cositas',
            items: [
              {
                icon: 'arrow',
                name: 'Box',
                slug: '?path=/story/components-box--base',
              },
              {
                icon: 'arrow',
                name: 'Tooltip',
                slug: '?path=/story/components-tooltip--by-click',
              },
              {
                icon: 'arrow',
                name: 'Tag',
                slug: '?path=/story/components-tag--contained',
              },
            ],
          },
        },
        {
          parent: {
            name: 'Theme',
          },
          children: {
            title: 'Cositas',
            items: [
              {
                icon: 'arrow',
                name: 'Border Radius',
                slug: '?path=/story/theme-borderradius--border-radius',
              },
              {
                icon: 'arrow',
                name: 'Colors',
                slug: '?path=/story/theme-colors--default-color-palette',
              },
              {
                icon: 'arrow',
                name: 'Breakpoints',
                slug: '?path=/story/theme-breakpoint--new-breakpoint',
              },
              {
                icon: 'arrow',
                name: 'Typography',
                slug: '?path=/story/theme-borderradius--border-radius',
              },
            ],
          },
        },
      ],
    },
  ],
];

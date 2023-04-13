export const menuItems: any[] = [
  [
    {
      title: 'Trip Style',
      items: [
        {
          parent: {
            name: 'Components',
          },
          children: [
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
        {
          parent: {
            name: 'Theme',
          },
          children: [
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
          ],
        },
      ],
    },
  ],
];

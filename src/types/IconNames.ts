export const iconNames = ['logo-rebrand', 'arrow', 'close'] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

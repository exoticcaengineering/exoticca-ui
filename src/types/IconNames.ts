export const iconNames = ['logo-rebrand', 'arrow'] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

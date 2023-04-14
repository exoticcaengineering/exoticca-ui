export const iconNames = ['logo-rebrand', 'ico-close'] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

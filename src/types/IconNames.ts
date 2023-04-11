export const iconNames = ['logo-rebrand'] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

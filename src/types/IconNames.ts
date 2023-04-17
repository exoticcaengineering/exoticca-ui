export const iconNames = [
  'logo-rebrand',
  'pill-status',
  'contact',
  'user',
  'search',
] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

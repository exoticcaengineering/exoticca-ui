export const iconNames = [
  'logo-rebrand',
  'pill-status',
  'contact',
  'user',
  'search',
  'arrow',
  'loader',
  'close',
] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

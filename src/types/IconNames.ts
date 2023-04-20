export const iconNames = [
  'logo-rebrand',
  'pill-status',
  'contact',
  'user',
  'search',
  'arrow',
  'loader',
  'close',
  'flag-us',
  'arrowSquare',
] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

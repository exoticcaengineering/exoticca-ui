export const iconNames = [
  'logo-rebrand',
  'pill-status',
  'contact',
  'user',
  'search',
  'arrowUp',
  'arrowDown',
  'loader',
  'close',
  'flag-us',
  'flag-uk',
  'flag-es',
  'flag-fr',
  'flag-de',
  'flag-mx',
  'flag-ca',
] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

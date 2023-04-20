export const iconNames = [
  //add simple icons here,simple icons are squared, and only use stroke color, and color can be changed
  'contact',
  'user',
  'search',
  'arrow',
  'loader',
  'close',
  'adventure',
  'beach',
  'culture',
  'fall',
  'honeymoon',
  'luxury',
  'multi-country',
  'nature',
  'safari',
  'spring',
  'summer',
  'winter',
  // add other svg image here, usually we don't want the icon color to change, like the flag, logos
  'logo-rebrand',
  'pill-status',
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

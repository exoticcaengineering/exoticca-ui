export const iconNames = [
  //add simple icons here,simple icons are squared, and only use stroke color, and color can be changed
  'contact',
  'user',
  'search',
  'arrow',
  'arrow-simple',
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
  'phone-call',
  'logout',
  'easter-egg',
  'tree',
  'hamburger-menu',
  'payment-success',
  'user-circle',
  'exclamation',
  'fallback',
  'arrow-square',
  'check',
  'calendar',
  'moon',
  'heart',
  'blog',
  'plane',
  'map-pin',
  'facebook-box',
  'instagram-box',
  'twitter-box',
  'youtube-box',
  'spotify-box',
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
  'star-5',
  'star-5-gl',
  'star-4',
  'star-4-sp',
  'star-3-sp',
] as const;

type IconNameType = typeof iconNames[number];

export type IconName = IconNameType;

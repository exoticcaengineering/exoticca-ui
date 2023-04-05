import { createGlobalStyle } from 'styled-components';

import {
  Theme,
  Breakpoints,
  Colors,
  FontFamily,
  FontSize,
  LineHeight,
  NewBreakpoints,
  NewPalette,
  FontWeight,
  MapSpacingValue,
  BorderRadius,
  BoxShadow,
  Duration,
  LetterSpacing,
  ZIndex,
  TextShadow,
  PrintSize,
} from 'src/types/theme';

import { GlobalStyleDefaultCss, GlobalStyleNewBrandingCss } from './global.css';

export const fontFamily: FontFamily = {
  main: `'Red Hat Text', sans-serif`,
  medium: `'Red Hat Text', sans-serif`,
  secondary: `'Playfair Display', serif`,
  secondaryMedium: `'Playfair Display', serif`,
  tertiary: `'Playfair Display', serif`,
  tertiaryMedium: `'Playfair Display', serif`,
  YoutubeAd: `'DrukCond', sans-serif`,
  newBranding: `'Oakes Grotesk', sans-serif`,
};

export const letterSpacing: LetterSpacing = {
  tighter: '-0.0625rem', // -1px
  tight: '-0.03125rem', // -0.5px
  normal: '0rem',
  wide: '0.03125rem', // 0.5px
  wider: '0.0625rem', // 1px
};

// 7px = 0.438rem
// 8px = 0.5rem
// 9px = 0.562rem
// 10px = 0.625rem
// 11px = 0.688rem
// 12px = 0.75rem
// 13px = 0.813rem
// 14px = 0.875rem
// 15px = 0.938rem
// 16px = 1rem (base)
// 17px = 1.063rem
// 18px = 1.125rem
// 19px = 1.188rem
// 20px = 1.25rem
// 21px = 1.313rem
// 22px = 1.375rem
// 23px = 1.438rem
// 24px = 1.5rem
// 25px = 1.563rem
// 26px = 1.625rem
// 28px = 1.75rem
// 29px = 1.813rem
// 30px = 1.875rem
// 32px = 2rem
// 34px = 2.125rem
// 35px = 2.188rem
// 36px = 2.25rem
// 38px = 2.375rem
// 39px = 2.438rem
// 40px = 2.5rem
// 44px = 2.75rem
// 46px = 2.875rem
// 48px = 3rem
// 52px = 3.25rem
// 60px = 3.75rem

export const fontSize: FontSize = {
  display: '2.875rem', // 46px
  h1: '2.25rem', // 36px
  h2: '1.875rem', // 30px
  tabletBannerTitle: '2rem', // 32px
  h3: '1.5rem', // 24px
  subtitle1: '1.375rem', // 22px
  subtitle2: '1.25rem', // 20px
  h4: '1.125rem', // 18px
  h5: '0.875rem', // 14px
  h6: '0.75rem', // 12px
  default: '1rem', // 16px
  small1: '0.6875rem', // 11px
  small2: '0.625rem', // 10px
  small3: '0.5rem', // 8px
  small4: '0.375rem', // 6px
  // new branding font size
  display1: '3.75rem', // 60px
  display2: '2.75rem', // 44px
  heading1: '2rem', // 32px
  heading2: '1.5rem', // 24px
  heading3: '1.25rem', // 20px
  body1: '1rem', // 16px
  body2: '0.875rem', // 14px
  body3: '0.75rem', // 12px
  button1: '1.25rem', // 20px
  button2: '1rem', // 16px
  button3: '0.875rem', // 14px
  caption: '0.75rem', // 12px
  overline: '0.75rem', // 12px
};

export const printSize: PrintSize = {
  heading3: '15pt', // 20px
  body1: '12pt', // 16px
  body2: '10.5pt', // 14px
  body3: '9', // 12px
  body4: '8pt', // 10px
  body5: '6pt', // 8px
};

export const fontSizeBase = '16px';

export const fontWeight: FontWeight = {
  lighter: 100,
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
  bolder: 700,
};

// lineHeight
export const lineHeight: LineHeight = {
  tight: 1.25,
  normal: 1.5,
};

const newPalette: NewPalette = {
  // ExoticcaLogo
  exoticcaLogo: '#CBB286',

  // PremiumCare
  premiumCare: '#285AF0',
  premiumCareLight: '#F5F8FE',

  // Guidelines
  guidelines: '#BC31EA',

  // Alpha α and Omega Ω
  white: '#FFFFFF',
  black: '#000000',

  //sematic color
  warning: '#E26D53',

  // Primary Gold
  primaryGold10: '#FFF5E3',
  primaryGold20: '#FFE3B0',
  primaryGold30: '#E5BE77',
  primaryGold40: '#CFA863',
  primaryGold50: '#B19662',
  primaryGold60: '#8E723E',
  primaryGold70: '#5E4A25',

  // Secondary Gold
  secondaryGold10: '#FBF7F2',
  secondaryGold20: '#F7F3E7',
  secondaryGold30: '#F1E3CB',
  secondaryGold40: '#E7CFA5',
  secondaryGold50: '#E8CB91',
  secondaryGold60: '#826F51',
  secondaryGold70: '#4F4131',

  // Primary Blue
  primaryBlue05: '#F3F5F8',
  primaryBlue10: '#F0F5FC',
  primaryBlue20: '#8D9EBF',
  primaryBlue30: '#38558F',
  primaryBlue40: '#1B306F',
  primaryBlue50: '#17295E',

  // Secondary Blue
  secondaryBlue10: '#EEF8FE',
  secondaryBlue15: '#EFF1FF',
  secondaryBlue20: '#E5F5FF',
  secondaryBlue30: '#ADD3E4',
  secondaryBlue40: '#64B5D9',
  secondaryBlue50: '#47AACC',
  secondaryBlue60: '#32778F',
  secondaryBlue70: '#214F5E',

  // Red
  red10: '#FEF3F4',
  red20: '#FFD4D7',
  red30: '#E07E84',
  red40: '#ED6370',
  red50: '#B03A45',
  red60: '#73262D',

  // SecondaryRed
  secondaryRed40: '#C04A30',

  // Green
  green10: '#F3FEFB',
  green20: '#CAEDE9',
  green30: '#95DBD2',
  green40: '#08C6B4',
  green50: '#008577',
  green60: '#306E66',
  green70: '#1E4943',
  green80: '#12312D',
  greenCalendar: '#0B7F24',

  // Grey
  grey10: '#FCFCFC',
  grey20: '#F2F2F2',
  grey30: '#E4E4E4',
  grey40: '#CACACA',
  grey50: '#979797',
  grey60: '#767676',
  grey70: '#454545',
  grey80: '#2A2A2A',

  // Purple
  purple40: '#924094',
  purple20: '#F9E8FA',

  // Promotion
  promotionBackground: 'linear-gradient(0deg, #FAE80E, #FAE80E);',
  yellowPromo: '#FAE80E',
  bluePromo: '#0028FD',
  lightBluePromo: '#51B2E9',
  brownPromo: '#FFC762',
  goldenPromo: '#E1BF7A',
  strongYellowPromo: '#F6C143',
  beigePromo: '#FFE3B0',
  turquoisePromo: '#08C6B4',

  //FlashSales
  flashSalesYellow: '#FDF3DA',

  //Custom Thematic Pills Colors
  flashSalesTextColor: '#FFA502',
  flashSalesTextBg: '#FFF4E0',

  // Auth
  googleBlue: '#4284f4',
  googleRed: '#eb4236',
  googleYellow: '#fcbc05',
  googleGreen: '#34a854',

  // Shadows
  primaryShadow: '2px 1px 8px rgba(0, 0, 0, 0.12)',
};

export const colors: Colors = {
  // 🎨 New Palette from 2021-Branding 🎨
  ...newPalette,
  transparent: 'transparent',
  emperor: '#535353',
  emperor38: 'rgba(84, 77, 77, 0.38)',
  ferra: '#e5e1d6',
  ferra5: 'rgba(229, 225, 214, 0.5)',
  ferra10: 'rgba(108, 80, 71, 0.1)',
  ferra50: 'rgba(108, 80, 71, 0.5)',
  ferraLight: 'rgba(229, 225, 214, 0.4)',
  black00: 'rgba(0,0,0,0)',
  black12: 'rgba(0,0,0,.12)',
  black72: 'rgba(0,0,0, .6)',
  black92: 'rgba(0,0,0, .92)',
  black06: 'rgba(0, 0, 0, 0.06)',
  flamePea: '#DF5239',
  red: '#DE0000',
  gray: '#666666',
  gray50: 'rgba(133, 133, 133, 0.5)',
  grayDark: '#544d4d',
  grayDark80: 'rgba(84,77,77,0.08)',
  green: '#009b76',
  mineShaft: '#333333',
  mineShaftDarker04: 'rgba(42,42,42,0.4)',
  mineShaftDarker4: 'rgba(42,42,42,0.04)',
  mineShaftDarker50: 'rgba(42,42,42,0.5)',
  pearlBush: '#EDE6DB',
  white50: 'rgba(255,255,255,0.5)',
  white37: 'rgba(255,255,255,0.37)',
  white95: 'rgba(255,255,255,0.95)',
  white9: 'rgba(255,255,255,0.09)',
  white4: 'rgba(255,255,255,0.04)',
  whiteCreamy: '#faf9f7',
  whiteGrey: '#f3f2f0',
  cafeRoyale: '#998255',
  goldenDarker: '#998255',
  golden36: 'rgba(177, 150, 98, 0.36)',
  golden24: 'rgba(177, 150, 98, 0.24)',
  goldenText: '#9b907a',
  goldenButton: '#c1aa90',
  grandis: '#ffd585',
  grandis15: 'rgb(255,213,133, 0.15)',
  purple: '#ac3d5b',
  brightSun: '#facb47',
  merino: '#f7f1e9',
  lightGrey: 'rgba(214,199,182, 0.2)',
  lightGrey15: 'rgba(216,216,216, 0.15)',
  lightGreyHex: '#d8d8d8',
  alabaster: '#fafafa',
  hibiscus20: 'rgba(194,46,98, 0.2)',
  mercury: '#e9e9e9',
  mercuryLight: '#e5e5e5',
  biscay: '#123D84',
  springWood: '#FBFAF7',
  fireBush: '#E58332',
  vinrouge: '#95415e',
  ferraGrayDark18: 'rgba(84,77,77,0.18)',
  grayNickel: '#c3c3c2',
  athensGray: '#EFF0F4',
  pampasDark: '#f3f1ec',
  pampas: '#F8F5F3',
  quillGray: '#dedddb',
  marzipan: '#f9dca3',
  albescentWhite: '#f5e8cf',
  lowGrey: '#929292',
  gallery: '#EBEAEA',
  jaffa: '#ec983c',
  jaffa20: 'rgba(236, 152, 60, 0.2)',
  silver: '#CCCCCC',
  keppel: '#32B397',
  keppel40: 'rgba(50,179,151, 0.4)',
  shiny: '#385DCB',
  redBright: '#B10104',
  mateak26: '#E7E0D1',
  tana40: 'rgba(223,214,193, 0.4)',
  silverChalice: '#AAAAAA',
  yoBarTitle: '#186069',
  heroPromoButton: '#faa21b',
  pearlLusta: '#FBEDDD',
  concrete: '#faf9f7',
  concreteLight: '#FBF2DF',
  froly: '#F7827D',
  elm: '#1a917b',
  doveGray: '#626262',
  tundora: 'rgba(64, 64, 64, 1)',
  tundora50: 'rgba(64, 64, 64, 0.5)',
  regalBlue: '#003a75',
  drawerBg: '#F4F4F4',
  textFooterColorLight: 'rgba(177, 150, 98, 0.36)',
  cararra: '#e9e8e6',
  desert: '#f7f6f5',
  potpourri41: 'rgba(241, 227, 216, 0.41)',
  bridalHeath: '#FFFAF0',
  yellowMetal: '#7f693f',
  aquaHaze: '#ebf3f3',
  carouselPink: '#fdf3f5',
  dawnPink: '#efe5dc',
  crimson: '#d41150',
  linkWater12: 'rgba(0, 42, 105, 0.12)',
  chathamsBlue: '#123D84',
  systemCrimson: '#1c7872',
  linen: '#fcf5f0',
  linenDark: '#FAECED',
  darkBoulder: '#6D6D6D',
  boulder50: 'rgba(123,121,121,0.5)',
  foam: '#e7fdf5',
  compactDisc: '#cdcdcd',
  discCompact: '#dcdcdc',
  flushMahogany: '#c33745',
  wispPink: '#fce8ea',
  elfGreen: '#0a8074',
  jungleGreen: '#306e66',
  midnightBlue: '#002A69',
  dynamite: '#c4c4c4',
  alto: '#E0DEDE',
  geyser: '#DCE0E5',
  loblolly: '#B8C2CC',
  shareFacebook: '#3b5998',
  shareFacebookMessenger: '#2196F3',
  shareWhatsapp: '#25D366',
  shareGrey: '#efefef',
  crail: '#BF3F4B',
  madang: '#B8EFB9',
  roseBud: '#F8A0A0',
  buttermilk: '#FFF0AD',
  lightApricot: '#FDDBB5',
  whiteIce: '#D4F3F7',
  linkWaterDarker: '#D9DFF7',
  whiteLilac: '#F3E8F8',
  zumthor: '#ECF4FF',
  grayNurse: '#E4EBE4',
  torchRed: '#FE0049',
  sazerac: '#FFF6E3',
  pdfCovidInfo: '#F7F3E9',
  footerBgColor: '#2a2a2a',
  textFooterColor: '#fff',
  coronaBackgroundColor: 'rgb(254, 249, 236)',
  blue10: '#ade7ff',
  blue20: '#61bcff',
  darkGrey: '#AEADAD',
};

export const newBreakpoints: NewBreakpoints = {
  mobile: '360px',
  phablet: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  desktopXL: '1536px',
  desktopMAX: '1920px',
};

const breakpoints: Breakpoints = {
  xs: '0px',
  ms: '360px',
  sm: '600px',
  md: '960px',
  mdLegacy: '1199px',
  lg: '1280px',
  xl: '1920px',
};

const borderRadius: BorderRadius = {
  none: '0px',
  xs: '2px',
  s: '4px',
  m: '6px',
  l: '8px',
  xl: '16px',
  xxl: '24px',
  semiRounded: '50%',
  rounded: '100%',
};

const boxShadow: BoxShadow = {
  none: 'none',
  xs: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  s: '0 2px 8px 0 rgba(0, 0, 0, 0.2)',
};

const textShadow: TextShadow = {
  none: 'none',
  xs: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  s: '0px 2px 10px rgba(0, 0, 0, 0.69)',
  m: '0px 2px 16px rgba(0, 0, 0, 0.7)',
};

const spacingBaseUnit = 8;

const mapSpacingValue: MapSpacingValue = (...args: number[]) => {
  const length = args.length;
  if (length < 1 || length > 4) return '0px';
  return args.map((space) => `${space * spacingBaseUnit}px`).join(' ');
};

const duration: Duration = {
  shortest: '100ms',
  shorter: '150ms',
  short: '200ms',
  standard: '300ms',
  long: '400ms',
  longer: '500ms',
  longest: '800ms',
};

export const zIndex: ZIndex = {
  level0: 0,
  level1: 1,
  level2: 2,
  level3: 3,
  level4: 5,
  level5: 8,
  level6: 13,
  level7: 21,
  level8: 1000,
  level9: 1100,
  level10: 1200,
};
export const themeDefault: Theme = {
  breakpoints,
  newBreakpoints,
  typography: {
    fontFamily,
    fontSize,
    printSize,
    fontWeight,
    letterSpacing,
    fontSizeBase,
    lineHeight,
  },
  colors,
  borderRadius,
  boxShadow,
  textShadow,
  spacing: mapSpacingValue,
  transition: {
    duration,
  },
  zIndex,
};

export const GlobalStyleDefault = createGlobalStyle`
 ${GlobalStyleDefaultCss}
`;

export const GlobalStyleNewBranding = createGlobalStyle`
 ${GlobalStyleNewBrandingCss}
`;

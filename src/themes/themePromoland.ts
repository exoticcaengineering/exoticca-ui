import { createGlobalStyle, DefaultTheme, Colors } from 'styled-components';
import { GlobalStyleDefaultCss } from './global.css';
import { colors as colorsDefault, themeDefault } from './theme';

export const colors: Colors = {
  ...colorsDefault,

  // Inherited from new palette
  black: '#000000',
  primaryGold50: '#E9AA00',
  primaryBlue20: '#E9AA00',
  primaryBlue30: '#080602',
  primaryBlue40: '#E9AA00',
  primaryBlue50: '#E9AA00',
  grey80: '#080602',
  premiumCare: '#E9AA00',

  biscay: '#080602',
  chathamsBlue: '#E9AA00',
  shiny: 'rgb(253, 168, 65)',
  merino: '#faf9f7',
  cafeRoyale: '#E9AA00',
  keppel: '#E9AA00',
  keppel40: 'rgba(255,140,0,0.4)',
  goldenButton: '#939394',
  ferra: '#e1e1e4',
  vinrouge: '#a2a2a7',
  grandis: '#E9AA00',
  grayDark: '#22222b',
  athensGray: 'rgba(255,140,0,0.07)',
  alabaster: 'rgb(247,247,247)',
  textFooterColorLight: 'rgba(255, 255, 255, 0.36)',
};

export const themePromoland: DefaultTheme = {
  ...themeDefault,
  colors,
};

export const GlobalStylePromoland = createGlobalStyle`
${GlobalStyleDefaultCss}
`;

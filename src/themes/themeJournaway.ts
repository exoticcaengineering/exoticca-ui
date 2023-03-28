import { createGlobalStyle } from 'styled-components';

import { Colors, FontFamily, Theme } from 'src/types/theme';
import { GlobalStyleDefaultCss } from './global.css';

import { colors as colorsDefault, themeDefault } from './theme';

export const fontFamily: FontFamily = {
  main: 'Barlow Condensed, sans-serif',
  medium: 'Barlow Condensed, sans-serif',
  secondary: 'Barlow Condensed, serif',
  secondaryMedium: 'Barlow Condensed, serif',
  tertiary: 'Barlow Condensed, serif',
  tertiaryMedium: 'Barlow Condensed, serif',
  YoutubeAd: `'DrukCond', sans-serif`,
};

export const colors: Colors = {
  ...colorsDefault,

  // Inherited from new palette
  primaryGold50: '#C82656',
  primaryBlue20: '#02BBEC',
  primaryBlue30: '#02BBEC',
  primaryBlue40: '#02BBEC',
  primaryBlue50: '#02BBEC',
  grey80: '#22222b',
  premiumCare: '#02BBEC',

  biscay: '#02BBEC',
  chathamsBlue: '#02BBEC',
  shiny: '#3accf3',
  goldenButton: '#939394',
  merino: '#faf9f7',
  cafeRoyale: '#C82656',
  keppel: '#02BBEC',
  keppel40: 'rgba(58,204,243,0.4)',
  ferra: '#e1e1e4',
  vinrouge: '#a2a2a7',
  grandis: '#02BBEC',
  athensGray: 'rgba(58,204,243,0.07)',
  alabaster: 'rgb(247,247,247)',
  footerBgColor: '#2a2a2a',
  textFooterColorLight: 'rgba(255, 255, 255, 0.36)',
};

export const themeJournaway: Theme = {
  ...themeDefault,
  typography: {
    ...themeDefault.typography,
    fontFamily,
  },
  colors,
};

export const GlobalStyleJournaway = createGlobalStyle`
${GlobalStyleDefaultCss}
`;

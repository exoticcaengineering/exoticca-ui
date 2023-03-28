import { createGlobalStyle } from 'styled-components';

import { Colors, FontFamily, Theme } from 'src/types/theme';
import { GlobalStyleDefaultCss } from './global.css';

import { colors as colorsDefault, themeDefault } from './theme';

export const fontFamily: FontFamily = {
  main: 'Quatro, sans-serif',
  medium: 'QuatroMedium, sans-serif',
  secondary: 'QuatroSlab, serif',
  secondaryMedium: 'QuatroSlabMedium, serif',
  tertiary: 'QuatroItalic, serif',
  tertiaryMedium: 'QuatroMediumItalic, serif',
  YoutubeAd: `'DrukCond', sans-serif`,
};

export const colors: Colors = {
  ...colorsDefault,

  // Inherited from new palette
  black: '#000000',
  primaryGold50: '#FF8C00',
  primaryBlue20: '#FF8C00',
  primaryBlue30: '#FF8C00',
  primaryBlue40: '#FF8C00',
  primaryBlue50: '#FF8C00',
  grey80: '#2a2a2a',
  premiumCare: '#FF8C00',

  biscay: '#FF8C00',
  chathamsBlue: '#FF8C00',
  shiny: 'rgb(253, 168, 65)',
  merino: '#faf9f7',
  cafeRoyale: '#FF8C00',
  keppel: '#FF8C00',
  keppel40: 'rgba(255,140,0,0.4)',
  goldenButton: '#939394',
  ferra: '#e1e1e4',
  vinrouge: '#a2a2a7',
  grandis: '#FF8C00',
  grayDark: '#22222b',
  athensGray: 'rgba(255,140,0,0.07)',
  alabaster: 'rgb(247,247,247)',
  textFooterColorLight: 'rgba(255, 255, 255, 0.36)',
};

export const themeSecretEscapes: Theme = {
  ...themeDefault,
  typography: {
    ...themeDefault.typography,
    fontFamily,
  },
  colors,
};

export const GlobalStyleSecretEscapes = createGlobalStyle`
${GlobalStyleDefaultCss}

  html {
    font-size: 0.875rem;
    /* Overwrite font-weight for 600 and bold */
    @font-face {
      font-family:"quatro";
      src:url("https://use.typekit.net/af/25b75a/00000000000000003b9afc06/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),
          url("https://use.typekit.net/af/25b75a/00000000000000003b9afc06/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),
          url("https://use.typekit.net/af/25b75a/00000000000000003b9afc06/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
      font-display:auto;font-style:normal;font-weight:600;

      @font-face {
        font-family:"quatro";
        src:url("https://use.typekit.net/af/25b75a/00000000000000003b9afc06/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/25b75a/00000000000000003b9afc06/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/25b75a/00000000000000003b9afc06/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:700;
      }

      @font-face {
        font-family:"quatro";
        src:url("https://use.typekit.net/af/b816f6/00000000000000003b9afc02/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/b816f6/00000000000000003b9afc02/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/b816f6/00000000000000003b9afc02/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:500;
      }

      @font-face {
        font-family:"quatro";
        src:url("https://use.typekit.net/af/e2ef1f/00000000000000003b9afc01/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/e2ef1f/00000000000000003b9afc01/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/e2ef1f/00000000000000003b9afc01/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:400;
      }

      @font-face {
        font-family:"quatro";
        src:url("https://use.typekit.net/af/d9a6aa/00000000000000003b9afbff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/d9a6aa/00000000000000003b9afbff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/d9a6aa/00000000000000003b9afbff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:300;
      }
    }
 
  }
`;

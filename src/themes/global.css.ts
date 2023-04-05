import { DefaultTheme, css } from 'styled-components';

export const GlobalStyleDefaultCss = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    &,
    body,
    div,
    span,
    input,
    button,
    select,
    textarea,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    .MuiTab-root {
      font-family: ${({ theme }) => theme.typography.fontFamily.main};
    }
    hr {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 0;
      border-top: 1px solid ${({ theme }) => theme.colors.silver};
    }
    header {
      margin-top: 0;
      width: 100%;
      top: 0;
      position: fixed;
      z-index: 15;
    }
    body {
      color: ${({ theme }) => theme.colors.black};
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      &.disableScroll {
        overflow: hidden;
        height: 100vh;
      }
      .slick-track {
        will-change: transform;
      }
      .slick-slide {
        > div {
          > div {
            outline: none !important;
          }
        }
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    button {
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
    }
    picture {
      display: block;
      font-size: 0;
    }
    input {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    p {
      margin: 0 0 10px;
    }
    ul {
      margin-top: 0;
      margin-bottom: 10px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
      line-height: 1.1;
    }
    h1,
    h2,
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    h4,
    h5,
    h6 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.h1};
    }
    h2 {
      font-size: ${({ theme }) => theme.typography.fontSize.h2};
    }
    h3 {
      font-size: ${({ theme }) => theme.typography.fontSize.h3};
    }
    h4 {
      font-size: ${({ theme }) => theme.typography.fontSize.h4};
    }
    h5 {
      font-size: ${({ theme }) => theme.typography.fontSize.h5};
    }
    h6 {
      font-size: ${({ theme }) => theme.typography.fontSize.h6};
    }
    input,
    button,
    select,
    textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    font-size: ${({ theme }) => theme.typography.fontSizeBase};
    font-synthesis: none;
  }
  #home,
  #destination,
  #destinationInfo,
  #destinationLandings {
    background-color: white;
    min-height: 100vh;
  }
  #checkout {
    padding: 85px 16px 32px 16px;
    @media (max-width: 479px) {
      padding: 40px 0 34px 0;
    }
  }
  .zindexHeader {
    z-index: 1600;
  }
  .zindexHeaderUnset {
    z-index: 15;
  }
  .lazyHeroPlaceholder {
    filter: blur(1rem);
    height: 100% !important;
    width: 100% !important;
  }
  .lazyPlaceholder {
    filter: blur(1rem);
    height: calc(100% + 2rem) !important;
    width: calc(100% + 2rem) !important;
    margin-left: -1rem;
    margin-top: -1rem;
  }

  /* legacy ICOMOON icons */
  @font-face {
    font-family: 'icomoon';
    src: url('data:application/x-font-ttf;charset=utf-8;base64,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')
      format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;

export const GlobalStyleNewBrandingCss = css`
  ${GlobalStyleDefaultCss}
  * {
    font-family: ${({ theme }: { theme: DefaultTheme }) =>
      `${theme.typography.fontFamily.newBranding} !important`}; // override default font-family
  }
`;

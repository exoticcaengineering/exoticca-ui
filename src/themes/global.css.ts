import { Theme } from 'src/types';
import { css } from 'styled-components';

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
`;

export const GlobalStyleNewBrandingCss = css`
  ${GlobalStyleDefaultCss}
  * {
    font-family: ${({ theme }: { theme: Theme }) =>
      `${theme.typography.fontFamily.newBranding} !important`}; // override default font-family
  }
`;

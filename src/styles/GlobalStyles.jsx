import { css } from '@emotion/react';

import 'modern-normalize';

import { theme } from './theme';
import ManropeMedium from '/fonts/Manrope-Medium.ttf';
import ManropeRegular from '/fonts/Manrope-Regular.ttf';
import ManropeSemiBold from '/fonts/Manrope-SemiBold.ttf';
import MontserratRegular from '/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '/fonts/Montserrat-SemiBold.ttf';

export const GlobalStyles = css`
  // Reset
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  // Common styles
  body {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.textGrey_100};
    background-color: ${theme.colors.backgroundMain};
  }

  // Fonts
  @font-face {
    font-family: 'Manrope';
    font-weight: 400;
    src: url(${ManropeRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    src: url(${ManropeMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 600;
    src: url(${ManropeSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: url(${MontserratRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: url(${MontserratSemiBold}) format('truetype');
  }
`;

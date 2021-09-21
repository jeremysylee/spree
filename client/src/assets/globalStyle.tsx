import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SF Pro';
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff) format('woff');
}
  body {
    background-color: #f5f5f5;
    color: black;
    font-family: Calibre;
  }
`;

export default GlobalStyle;
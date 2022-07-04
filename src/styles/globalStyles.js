// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  body, html, h1, h2, h3, h4, h5, h6, p, ul, ol, li, a, button, input, textarea, label, select, option, form, fieldset, legend, table, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
 
  #root {
    --color-primary: #fff ;
    --color-secondary: #DB7093;
    --color-tertiary: #EBBDB7;
    --color-quaternary:#FFB6C1;
    --text-color-primary: #FFB6C1;
    --text-color-secondary: #434343;
    --text-color-tertiary: #000000;
    --background-footer: #901742;
    --fonte-principal: Open-Sans, Helvetica, Sans-Serif;
  }
  
    a {
    text-decoration: none;
    }
    a:hover {
    text-decoration: none;
    }
    ul {
    list-style: none;
    }
    li {
    list-style: none;
    }
  
    
`;


export default GlobalStyle;


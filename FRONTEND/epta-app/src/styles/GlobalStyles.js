import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    background-color: #ffffff;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
  }
`;

export default GlobalStyles;

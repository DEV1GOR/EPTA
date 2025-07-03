import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden; 
    height: 100%;
    width: 100%; 
    font-family: Arial, sans-serif; 
    box-sizing: border-box; 
  }

  *, *::before, *::after {
    box-sizing: inherit; 
  }

  #root {
    height: 100%; 
    display: flex; 
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
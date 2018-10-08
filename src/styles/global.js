import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #fefeff;
    font-family: 'Montserrat', sans-serif;
  }

  input, button {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

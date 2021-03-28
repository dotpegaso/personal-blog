import { createGlobalStyle } from "styled-components";
import { highlightColor } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-family: 'Commissioner', sans-serif;
    font-family: var(--regular-font);
    background-color: ${highlightColor};
  }
`;

export default GlobalStyles;

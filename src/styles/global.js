import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  :root {  
    --constrast: #FF67ED;  
    --button-hover: #ff86f1;
  }

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
    background-color: var(--highlight);
  }

  body.dark {
    --background: #101021;
    --highlight: #000;
    --code-background: #252525;
    --primary: #ECECEC;
    --secondary: #b9b9b9;
    --theme-wheel-transform: rotate(0deg);
  }
  
  body.light {
    --background: #fffdf6;
    --highlight: #f3f4f5;
    --code-background: #f1f1f1;
    --primary: #333;
    --secondary: #666;
    --theme-wheel-transform: rotate(180deg);
  }
`;

export default GlobalStyles;

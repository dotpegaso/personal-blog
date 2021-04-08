import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  :root {  
    --constrast: hsl(307 100% 70%);
    --button-hover: hsl(307 100% 75%);
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
    --background: hsl(240 35% 10%);
    --highlight: hsl(0 0% 0%);
    --code-background: hsl(0 0% 15%);
    --primary: hsl(0 0% 95%);
    --secondary: hsl(0 0% 75%);
    --theme-wheel-transform: rotate(0deg);
  }
  
  body.light {
    --background: hsl(47 100% 98%);
    --highlight: hsl(210, 0%, 95%);
    --code-background: hsl(0 0% 95%);
    --primary: hsl(0 0% 20%);
    --secondary: hsl(0 0% 40%);
    --theme-wheel-transform: rotate(180deg);
  }
`;

export default GlobalStyles;

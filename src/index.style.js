import { injectGlobal } from "styled-components";

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Droid sans", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }
`;

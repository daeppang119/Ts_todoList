import { createGlobalStyle } from "styled-components";
import reset from "../styledComponents/reset.module.css";
const GlobalStyle = createGlobalStyle`
${reset}

html {
    scroll-behavior: smooth;
    font-size : 62.5%; // 1rem = 10px
}

body {
    margin: 0;
    padding: 0;
    line-height: 1.3;
    letter-spacing: 0.1px;
    word-break: keep-all;
}

button,a  {
    all : unset
}

img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
`;

export default GlobalStyle;

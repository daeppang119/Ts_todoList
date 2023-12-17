import { createGlobalStyle } from "styled-components";
import reset from "../styledComponents/reset.module.css";
const GlobalStyle = createGlobalStyle`
${reset}

html {
    scroll-behavior: smooth;
    font-size : 62.5%; // 1rem = 10px
}

* {
        box-sizing: border-box;
    }

body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::-webkit-scrollbar {
      display: none;
    }
}

button,a  {
    all : unset
}

img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

#root{
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
}

`;

export default GlobalStyle;

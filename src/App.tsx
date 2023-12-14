import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./styledComponents/Globalstyle";
import theme from "./styledComponents/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

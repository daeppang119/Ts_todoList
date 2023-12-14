import mediaQuery from "./mediaQuery";

type ThemeProps = {
  [key: string]: string;
};

const lightTheme: ThemeProps = {
  bgColor: "#f9f9f9",
  textColor: "#333333",
  borderColor: "#ede7f7",
  toggleColor: "#cbb5dc",
};

const darkTheme: ThemeProps = {
  bgColor: "#000000",
  textColor: "#f0eef6",
  borderColor: "#a9b0c0",
  toggleColor: "#e0cde3",
};

const theme = {
  mediaQuery,
  lightTheme,
  darkTheme,
};

export default theme;

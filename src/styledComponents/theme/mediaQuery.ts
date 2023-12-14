import { CSSProp } from "styled-components";

type MediaQueryProps = {
  [key: string]: number;
};

const breakPoints: MediaQueryProps = {
  md: 800,
  xl: 1200,
};

const mediaQuery = (
  Object.keys(breakPoints) as Array<keyof typeof breakPoints>
).reduce((acc, label) => {
  acc[label] = (style: string) =>
    `@media (max-width: ${breakPoints[label] / 16}em) { ${style} }`;
  return acc;
}, {} as { [key in keyof typeof breakPoints]: (style: string) => CSSProp });

export default mediaQuery;

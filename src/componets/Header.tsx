import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <h1>React TypeScript</h1>
      <button>dark</button>
    </>
  );
}

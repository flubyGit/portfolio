import React, { useState, useEffect, createContext, ReactNode } from "react";

type Dark = {
  theme: boolean;
  handleTheme: () => void;
};

export const DarkModeContext = createContext<Dark>({
  theme: false,
  handleTheme: () => {},
});

interface Children<RN> {
  children: RN;
}
export default function DarkModeProvider({
  children,
}: Children<ReactNode>): JSX.Element {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    if (theme) {
      window.localStorage.setItem("Theme", "dark");
      setTheme(true);
      document.body.classList.add("dark-mode");
    } else {
      window.localStorage.setItem("Theme", "light");
      setTheme(false);
      document.body.classList.remove("dark-mode");
    }
    setTheme(!theme);
  };

  useEffect(() => {
    const getThemeLocalStorage = window.localStorage.getItem("Theme");
    if (getThemeLocalStorage) return document.body.classList.add("dark-mode");
  }, []);

  const value = { handleTheme, theme };
  Object.freeze(value);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

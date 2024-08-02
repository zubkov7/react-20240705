import { useState } from "react";
import { useCallback } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

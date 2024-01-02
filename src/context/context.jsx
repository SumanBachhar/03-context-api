import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useGlobalTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const toggleTheme = () => {
    setIsDarkmode((prevState) => !prevState);
  };

  const theme = isDarkmode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkmode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

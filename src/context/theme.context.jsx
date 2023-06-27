/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo, useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "emerald"
  );

  const toggleTheme = () => {
    const newTheme = theme === "emerald" ? "dark" : "emerald";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme,
  }));
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

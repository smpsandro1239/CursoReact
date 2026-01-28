import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const html = document.documentElement;

    // Reset classes
    html.classList.remove('dark', 'sepia', 'high-contrast');

    // Apply new theme
    if (theme !== 'light') {
      html.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme) => setTheme(newTheme);

  const isDarkMode = theme === 'dark';
  const toggleDarkMode = () => setTheme(isDarkMode ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

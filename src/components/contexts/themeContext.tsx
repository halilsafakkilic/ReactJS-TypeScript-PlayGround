import React, { createContext, useState } from 'react';


const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => { }
});

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
}

export default ThemeContext;
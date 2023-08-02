// ThemeContext.tsx
import React, { createContext, useState, useContext } from "react";

type Theme = "candy-land" | "nature-theme" | "space-theme" | "ocean-theme";

const defaultTheme: Theme = "space-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}
interface ThemeContextType {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}
const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

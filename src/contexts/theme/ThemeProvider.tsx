// ThemeContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
const [theme, setTheme] = useState<Theme>(() => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    // fallback: detectar pelo DOM
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
  return 'light';
});

useEffect(() => {
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

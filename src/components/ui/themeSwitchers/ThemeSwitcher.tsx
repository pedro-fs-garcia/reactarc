// ThemeSwitcher.tsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme/ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border bg-background hover:bg-background-200 transition-colors text-primary cursor-pointer"
      aria-label="Alternate theme"
      title="Alternate theme light/dark"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

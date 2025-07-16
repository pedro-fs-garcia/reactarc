import { useTheme } from "@/contexts/theme/ThemeProvider";
import { Building2, Leaf, Moon, Sun, Sunset } from "lucide-react";
import Dropdown from "../inputs/Dropdown";

export default function ThemeDropdown() {
    const { theme, setTheme } = useTheme();

    const themeOptions = [
        { value: "light", label: "Light", icon: <Sun className="text-yellow-400" size={16} /> },
        { value: "dark", label: "Dark", icon: <Moon className="text-blue-500" size={16} /> },
        { value: "corporate", label: "Corporate", icon: <Building2 className="text-gray-700" size={16} /> },
        { value: "nature", label: "Nature", icon: <Leaf className="text-green-600" size={16} /> },
        { value: "sunset", label: "Sunset", icon: <Sunset className="text-orange-500" size={16} /> },
    ]

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme as 'light' | 'dark' | 'corporate' | 'nature' | 'sunset');
    }
    return (
        <Dropdown
            options={themeOptions}
            value={theme}
            onChange={handleThemeChange}
            size="sm"
            placeholder="Tema"
            label={undefined}
        />
    )
}
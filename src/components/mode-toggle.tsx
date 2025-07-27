import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    return <div onClick={() => setTheme(theme === 'light' ? 'dark': 'light')}>
        {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
    </div>
}
'use client';

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export const ModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Always render the same container div to prevent hydration issues
    return (
        <div 
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
            className="w-5 h-5 cursor-pointer"
        >
            {mounted && (
                resolvedTheme === 'light' ? (
                    <Moon size={20} className="w-full h-full" />
                ) : (
                    <Sun size={20} className="w-full h-full" />
                )
            )}
        </div>
    )
}
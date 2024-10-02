import React, { useState, useContext, createContext } from 'react'
import Button from './Button'

const ThemeContext = createContext({ })

export function ThemeUseProvider({ children }) {
    const [ theme, setTheme ] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function ToggleTheme() {
    const context = useTheme()
    return (
        <Button onClick={() => context.toggleTheme()}>{context.theme}</Button>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

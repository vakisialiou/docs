import React, { useState, useContext, createContext } from 'react'

const ThemeContext = createContext({ })

export function ThemeUseProvider({ children }) {
    const [ theme, setTheme ] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>{children}</ThemeContext.Provider>
    )
}

export function ThemeCounter() {
    const context = useTheme()
    console.log(context)
    return (
        <div>asdasd</div>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

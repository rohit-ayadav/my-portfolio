"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check user preference for dark mode
        const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDarkPreferred);

        // Add listener for theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        // Clean up
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? 'dark' : ''}>
                <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

// Custom hook to use the theme context
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { toast } from "sonner";

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Check if the user has a preferred color scheme
        const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDarkPreferred);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleDarkMode = () => {
        toast("Paid Feature", {
            description: "Toggling dark mode is available only for subscribers.",
            action: {
                label: "Contact",
                onClick: () => {
                    const phoneNumber = "916392177974";
                    const message = encodeURIComponent(
                        "Hello, I am interested in unlocking the paid feature (Dark Mode) on your portfolio. Please share the subscription details."
                    );
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                },
            },
        });
        // setDarkMode(!darkMode);
    };

    useEffect(() => {
        // update the theme when darkMode changes
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

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

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
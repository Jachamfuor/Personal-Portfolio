"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";


    return (
        <label className="switch shrink-0" aria-label="Toggle dark mode">
            <input
                type="checkbox"
                checked={isDark}
                onChange={() => setTheme(isDark ? "light" : "dark")}
            />
            <span className="slider" />
        </label>
    );
}

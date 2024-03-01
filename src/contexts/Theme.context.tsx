import React, { Dispatch, SetStateAction } from "react";
import { THEMES } from "./Theme.config";
import { Theme, ThemeType } from "./Theme.model";

interface ThemeContextProps {
    themeType: ThemeType;
    theme: Theme;
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    themeType: "dark",
    theme: THEMES["dark"],
} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
    const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("dark");

    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            theme: THEMES[currentTheme], 
            setCurrentTheme, 
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);
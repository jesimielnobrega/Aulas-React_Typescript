import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "../themes";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: "Light" | "Dark";
  toogleTheme: () => void;
}
interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"Light" | "Dark">("Light");

  const toogleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "Light" ? "Dark" : "Light"
    );
  }, [themeName]);

  const theme = useMemo(() => {
    if (themeName === "Light") return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

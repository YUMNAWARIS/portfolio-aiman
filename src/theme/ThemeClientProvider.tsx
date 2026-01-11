"use client";

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, createAppTheme, ColorMode } from "@/theme";

export default function ThemeClientProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<ColorMode>("light");

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem("color-mode");
      if (stored === "light" || stored === "dark") {
        setMode(stored);
        return;
      }
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setMode("dark");
      }
    } catch {}
  }, []);

  const toggleColorMode = React.useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      try {
        window.localStorage.setItem("color-mode", next);
      } catch {}
      return next;
    });
  }, []);

  const theme = React.useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}



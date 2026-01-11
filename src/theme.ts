"use client";
import React from "react";
import { createTheme, Theme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

export type ColorMode = "light" | "dark";

export const ColorModeContext = React.createContext({
  mode: "light" as ColorMode,
  toggleColorMode: () => {},
});

function getDesignTokens(mode: PaletteMode) {
  return {
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      secondary: {
        main: mode === "light" ? "#9c27b0" : "#ce93d8",
      },
      background: {
        default: mode === "light" ? "#fafafa" : "#0a0a0a",
        paper: mode === "light" ? "#ffffff" : "#121212",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        defaultProps: { variant: "contained" },
      },
      MuiContainer: {
        defaultProps: { maxWidth: "lg" },
      },
    },
  } as const;
}

export function createAppTheme(mode: PaletteMode): Theme {
  return createTheme(getDesignTokens(mode));
}



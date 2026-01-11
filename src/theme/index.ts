"use client";

import React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export type ColorMode = "light" | "dark";

export const ColorModeContext = React.createContext<{
  mode: ColorMode;
  toggleColorMode: () => void;
}>({ mode: "light", toggleColorMode: () => {} });

export function createAppTheme(mode: ColorMode) {
  const commonOptions: ThemeOptions = {
    cssVariables: true,
    typography: {
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      h1: { fontWeight: 700, letterSpacing: -0.5 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiButton: {
        defaultProps: { variant: "contained" },
      },
      MuiContainer: {
        defaultProps: { maxWidth: "lg" },
      },
    },
  };

  if (mode === "dark") {
    return createTheme({
      ...commonOptions,
      palette: {
        mode: "dark",
        primary: { main: "#7c8fff" },
        secondary: { main: "#64ffda" },
        background: {
          default: "#0b0e14",
          paper: "#0f1320",
        },
      },
    });
  }

  return createTheme({
    ...commonOptions,
    palette: {
      mode: "light",
      primary: { main: "#3a5bcc" },
      secondary: { main: "#006d77" },
      background: {
        default: "#ffffff",
        paper: "#f7f8fb",
      },
    },
  });
}



import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import YoungSerif from "../../assets/fonts/YoungSerif.ttf";
import CssBaseline from "@mui/material/CssBaseline";

const colors = {
  richBlack: "#040F0F",
  forestGreen: "#248232",
  pigmentGreen: "#2BA84A",
  gunMetal: "#2D3A3A",
  white: "#FCFFFC",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: colors.richBlack, // Your primary color
    },
    secondary: {
      main: colors.gunMetal, // Your secondary color
    },
    darkGreen: {
      main: colors.forestGreen,
    },
    lightGreen: {
      main: colors.pigmentGreen,
    },
    error: {
      main: "#f44336", // Your error color
    },
    background: {
      default: colors.richBlack,
      paper: colors.richBlack,
    },
    text: {
      primary: colors.white,
    },
  },
  typography: {
    fontFamily: [
      '"YoungSerif"', // Default font
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize", // Capitalize button text
          color: colors.white,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            margin: 0,
            padding: 0,
          },
        },
      },
    },
  },
});

const Theme = ({ children }) => {
  const fontFaceStyle = document.createElement("style");
  fontFaceStyle.innerHTML = `
    @font-face {
      font-family: "YoungSerif"; /* Name from your font file */
      src: url(${YoungSerif}) format('truetype'); /* Point to your font file path */
    }
  `;
  document.head.appendChild(fontFaceStyle);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// #898989
// 
// #D67B60
// #E9E9E6
// #F9F9F9
// #2E2E2E
// #D82E3B



// Color design tokens
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
              grey: {
                100: "#e7e7e7",
                200: "#d0d0d0",
                300: "#b8b8b8",
                400: "#a1a1a1",
                500: "#898989",
                600: "#6e6e6e",
                700: "#525252",
                800: "#373737",
                900: "#1b1b1b",
              },
              primary: {
                100: "#d5d5d5",
                200: "#ababab",
                300: "#828282",
                400: "#585858",
                500: "#2e2e2e",
                600: "#252525",
                700: "#1c1c1c",
                800: "#121212",
                900: "#090909"
              },
              greenAccent: {
                  100: "#dbf5ee",
                  200: "#b7ebde",
                  300: "#94e2cd",
                  400: "#70d8bd",
                  500: "#4cceac",
                  600: "#3da58a",
                  700: "#2e7c67",
                  800: "#1e5245",
                  900: "#0f2922",
              },
              redAccent: {
                  100: "#f8dcdb",
                  200: "#f1b9b7",
                  300: "#e99592",
                  400: "#e2726e",
                  500: "#db4f4a",
                  600: "#af3f3b",
                  700: "#832f2c",
                  800: "#58201e",
                  900: "#2c100f",
              },
              blueAccent: {
                  100: "#e1e2fe",
                  200: "#c3c6fd",
                  300: "#a4a9fc",
                  400: "#868dfb",
                  500: "#6870fa",
                  600: "#535ac8",
                  700: "#3e4396",
                  800: "#2a2d64",
                  900: "#151632",
              },
          }
        : {
              grey: {
                  100: "#141414",
                  200: "#292929",
                  300: "#3d3d3d",
                  400: "#525252",
                  500: "#666666",
                  600: "#858585",
                  700: "#a3a3a3",
                  800: "#c2c2c2",
                  900: "#e0e0e0",
              },
              primary: {
                  100: "#040509",
                  200: "#080b12",
                  300: "#0c101b",
                  400: "#f2f0f0",
                  500: "#141b2d",
                  600: "#434957",
                  700: "#727681",
                  800: "#a1a4ab",
                  900: "#d0d1d5",
              },
              greenAccent: {
                  100: "#0f2922",
                  200: "#1e5245",
                  300: "#2e7c67",
                  400: "#3da58a",
                  500: "#4cceac",
                  600: "#70d8bd",
                  700: "#94e2cd",
                  800: "#b7ebde",
                  900: "#dbf5ee",
              },
              redAccent: {
                  100: "#2c100f",
                  200: "#58201e",
                  300: "#832f2c",
                  400: "#af3f3b",
                  500: "#db4f4a",
                  600: "#e2726e",
                  700: "#e99592",
                  800: "#f1b9b7",
                  900: "#f8dcdb",
              },
              blueAccent: {
                  100: "#151632",
                  200: "#2a2d64",
                  300: "#3e4396",
                  400: "#535ac8",
                  500: "#6870fa",
                  600: "#868dfb",
                  700: "#a4a9fc",
                  800: "#c3c6fd",
                  900: "#e1e2fe",
              },
          }),
});

//material ui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      primary: {
                          main: colors.primary[500],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: colors.primary[500],
                      },
                  }
                : {
                      primary: {
                          main: colors.primary[100],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: "#fcfcfc",
                      },
                  }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// content for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};




// grey: {
//     100: "#e7e7e7",
//     200: "#d0d0d0",
//     300: "#b8b8b8",
//     400: "#a1a1a1",
//     500: "#898989",
//     600: "#6e6e6e",
//     700: "#525252",
//     800: "#373737",
//     900: "#1b1b1b",
//   },
//   primary: {
//     100: "#d5d5d5",
//     200: "#ababab",
//     300: "#828282",
//     400: "#585858",
//     500: "#2e2e2e",
//     600: "#252525",
//     700: "#1c1c1c",
//     800: "#121212",
//     900: "#090909",
//   },
//   greenAccent: {
//     100: "#f7e5df",
//     200: "#efcabf",
//     300: "#e6b0a0",
//     400: "#de9580",
//     500: "#d67b60",
//     600: "#ab624d",
//     700: "#804a3a",
//     800: "#563126",
//     900: "#2b1913"
//   },
//   redAccent: {
//     100: "#fefefe",
//     200: "#fdfdfd",
//     300: "#fbfbfb",
//     400: "#fafafa",
//     500: "#f9f9f9",
//     600: "#c7c7c7",
//     700: "#959595",
//     800: "#646464",
//     900: "#323232",
//   },
//   blueAccent: {
//     100: "#fbfbfa",
//     200: "#f6f6f5",
//     300: "#f2f2f0",
//     400: "#ededeb",
//     500: "#e9e9e6",
//     600: "#babab8",
//     700: "#8c8c8a",
//     800: "#5d5d5c",
//     900: "#2f2f2e",
//   },
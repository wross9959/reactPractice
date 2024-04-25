import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color picker mostly for me 
const colorPalettes = [
    {
        dark: {
            primary: {
                color0: {
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
                color1: {
                    100: "#4E89AE",
                    200: "#436F8A",
                    300: "#375666",
                    400: "#2B3D42",
                    500: "#1F2427",
                    600: "#141A1C",
                    700: "#0A0F10",
                    800: "#000505",
                    900: "#000000",
                },
                color2: {
                    100: "#ffeddc",
                    200: "#ffdaba",
                    300: "#ffc897",
                    400: "#ffb575",
                    500: "#ffa352",
                    600: "#cc8242",
                    700: "#996231",
                    800: "#664121",
                    900: "#332110"
                },
                color3: {
                    100: "#e2e2e2",
                    200: "#c5c6c6",
                    300: "#a7a9a9",
                    400: "#8a8d8d",
                    500: "#6d7070",
                    600: "#575a5a",
                    700: "#414343",
                    800: "#2c2d2d",
                    900: "#161616"
                },
                color4: {
                    100: "#d8e2ff",
                    200: "#b0c6ff",
                    300: "#89a9ff",
                    400: "#618dff",
                    500: "#3a70ff",
                    600: "#2e5acc",
                    700: "#234399",
                    800: "#172d66",
                    900: "#0c1633"
                },
                color5: {
                    100: "#dbeffd",
                    200: "#b8dffa",
                    300: "#94cef8",
                    400: "#71bef5",
                    500: "#4daef3",
                    600: "#3e8bc2",
                    700: "#2e6892",
                    800: "#1f4661",
                    900: "#0f2331"
                }
            },
            secondary: {
                color0: {
                    100: "#e7e7e7",
                    200: "#d0d0d0",
                    300: "#b8b8b8",
                    400: "#a1a1a1",
                    500: "#898989",
                    600: "#6e6e6e",
                    700: "#525252",
                    800: "#373737",
                    900: "#1b1b1b"
                },
                color1: {
                    100: "#FFA69E",
                    200: "#FF928B",
                    300: "#FF7E75",
                    400: "#F85E63",
                    500: "#E03E52",
                    600: "#C21E3C",
                    700: "#A40027",
                    800: "#860019",
                    900: "#670012"
                },
                color2: {
                    100: "#eee2de",
                    200: "#ddc6bd",
                    300: "#cca99d",
                    400: "#bb8d7c",
                    500: "#aa705b",
                    600: "#885a49",
                    700: "#664337",
                    800: "#442d24",
                    900: "#221612"
                },
                color3: {
                    100: "#dedbe0",
                    200: "#bcb6c2",
                    300: "#9b92a3",
                    400: "#796d85",
                    500: "#584966",
                    600: "#463a52",
                    700: "#352c3d",
                    800: "#231d29",
                    900: "#120f14"
                },
                color4: {
                    100: "#fcdefd",
                    200: "#f9bdfb",
                    300: "#f59cf9",
                    400: "#f27bf7",
                    500: "#ef5af5",
                    600: "#bf48c4",
                    700: "#8f3693",
                    800: "#602462",
                    900: "#301231"
                },
                color5: {
                    100: "#cceae7",
                    200: "#99d5cf",
                    300: "#66c0b8",
                    400: "#33aba0",
                    500: "#009688",
                    600: "#00786d",
                    700: "#005a52",
                    800: "#003c36",
                    900: "#001e1b"
                }
            },
            tertiary: {
                color0: {
                    100: "#dbf5ee",
                    200: "#b7ebde",
                    300: "#94e2cd",
                    400: "#70d8bd",
                    500: "#4cceac",
                    600: "#3da58a",
                    700: "#2e7c67",
                    800: "#1e5245",
                    900: "#0f2922"
                },
                color1: {
                    100: "#EDD382",
                    200: "#E0BB66",
                    300: "#D3A450",
                    400: "#C68E3B",
                    500: "#BA7929",
                    600: "#AA6319",
                    700: "#94500D",
                    800: "#7F3D00",
                    900: "#692B00"
                },
                color2: {
                    100: "#e9e6d7",
                    200: "#d3cdae",
                    300: "#bdb486",
                    400: "#a79b5d",
                    500: "#918235",
                    600: "#74682a",
                    700: "#574e20",
                    800: "#3a3415",
                    900: "#1d1a0b"
                },
                color3: {
                    100: "#dfe5dc",
                    200: "#bfcab9",
                    300: "#a0b097",
                    400: "#809574",
                    500: "#607b51",
                    600: "#4d6241",
                    700: "#3a4a31",
                    800: "#263120",
                    900: "#131910"
                },
                color4: {
                    100: "#ccf6d7",
                    200: "#99ecaf",
                    300: "#66e387",
                    400: "#33d95f",
                    500: "#00d037",
                    600: "#00a62c",
                    700: "#007d21",
                    800: "#005316",
                    900: "#002a0b"
                },
                color5: {
                    100: "#ffddd3",
                    200: "#ffbca7",
                    300: "#ff9a7a",
                    400: "#ff794e",
                    500: "#ff5722",
                    600: "#cc461b",
                    700: "#993414",
                    800: "#66230e",
                    900: "#331107"
                }
            },
            accentOne: {
                color0: {
                    100: "#f8dcdb",
                    200: "#f1b9b7",
                    300: "#e99592",
                    400: "#e2726e",
                    500: "#db4f4a",
                    600: "#af3f3b",
                    700: "#832f2c",
                    800: "#58201e",
                    900: "#2c100f"
                },
                color1: {
                    100: "#A5FECB",
                    200: "#77F7B5",
                    300: "#4BF29B",
                    400: "#23ED82",
                    500: "#0BD761",
                    600: "#009F4D",
                    700: "#007939",
                    800: "#005324",
                    900: "#002D10"
                },
                color2: {
                    100: "#d1e2ff",
                    200: "#a3c5ff",
                    300: "#75a7ff",
                    400: "#478aff",
                    500: "#196dff",
                    600: "#1457cc",
                    700: "#0f4199",
                    800: "#0a2c66",
                    900: "#051633"
                },
                color3: {
                    100: "#fad9db",
                    200: "#f6b3b7",
                    300: "#f18d92",
                    400: "#ed676e",
                    500: "#e8414a",
                    600: "#ba343b",
                    700: "#8b272c",
                    800: "#5d1a1e",
                    900: "#2e0d0f"
                },
                color4: {
                    100: "#f6f8cc",
                    200: "#eef199",
                    300: "#e5ea66",
                    400: "#dde333",
                    500: "#d4dc00",
                    600: "#aab000",
                    700: "#7f8400",
                    800: "#555800",
                    900: "#2a2c00"
                },
                color5: {
                    100: "#dbefdc",
                    200: "#b7dfb9",
                    300: "#94cf96",
                    400: "#70bf73",
                    500: "#4caf50",
                    600: "#3d8c40",
                    700: "#2e6930",
                    800: "#1e4620",
                    900: "#0f2310"
                }
              
            },
            accentTwo: {
                color0: {
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
                color1: {
                    100: "#82C4C3",
                    200: "#6EB2B1",
                    300: "#5B9F9F",
                    400: "#498D8D",
                    500: "#377A7A",
                    600: "#276868",
                    700: "#175655",
                    800: "#084443",
                    900: "#003231"
                },
                color2: {
                    100: "#ffe4d1",
                    200: "#ffc9a3",
                    300: "#ffaf75",
                    400: "#ff9447",
                    500: "#ff7919",
                    600: "#cc6114",
                    700: "#99490f",
                    800: "#66300a",
                    900: "#331805"
                },
                color3: {
                    100: "#d4daeb",
                    200: "#a9b5d6",
                    300: "#7f91c2",
                    400: "#546cad",
                    500: "#294799",
                    600: "#21397a",
                    700: "#192b5c",
                    800: "#101c3d",
                    900: "#080e1f"
                },
                color4: {
                    100: "#ffe0e6",
                    200: "#ffc2cc",
                    300: "#ffa3b3",
                    400: "#ff8599",
                    500: "#ff6680",
                    600: "#cc5266",
                    700: "#993d4d",
                    800: "#662933",
                    900: "#33141a"
                },
                color5: {
                    100: "#e1d8f1",
                    200: "#c2b0e2",
                    300: "#a489d4",
                    400: "#8561c5",
                    500: "#673ab7",
                    600: "#522e92",
                    700: "#3e236e",
                    800: "#291749",
                    900: "#150c25"
                }
            },
        },
        light:{
            primary: {
                color0: {
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
                color1: {
                    100: "#000000",
                    200: "#000505",
                    300: "#0A0F10",
                    400: "#141A1C",
                    500: "#1F2427",
                    600: "#2B3D42",
                    700: "#375666",
                    800: "#436F8A",
                    900: "#4E89AE",
                },
                color2: {
                    100: "#332110",
                    200: "#664121",
                    300: "#996231",
                    400: "#cc8242",
                    500: "#ffa352",
                    600: "#ffb575",
                    700: "#ffc897",
                    800: "#ffdaba",
                    900: "#ffeddc",
                },
                color3: {
                    100: "#161616",
                    200: "#2c2d2d",
                    300: "#414343",
                    400: "#575a5a",
                    500: "#6d7070",
                    600: "#8a8d8d",
                    700: "#a7a9a9",
                    800: "#c5c6c6",
                    900: "#e2e2e2",
                },
                color4: {
                    100: "#0c1633",
                    200: "#172d66",
                    300: "#234399",
                    400: "#2e5acc",
                    500: "#3a70ff",
                    600: "#618dff",
                    700: "#89a9ff",
                    800: "#b0c6ff",
                    900: "#d8e2ff",
                },
                color5: {
                    100: "#0f2331",
                    200: "#1f4661",
                    300: "#2e6892",
                    400: "#3e8bc2",
                    500: "#4daef3",
                    600: "#71bef5",
                    700: "#94cef8",
                    800: "#b8dffa",
                    900: "#dbeffd",
                }
            },
            secondary: {
                color0: {
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
                color1: {
                    100: "#670012",
                    200: "#860019",
                    300: "#A40027",
                    400: "#C21E3C",
                    500: "#E03E52",
                    600: "#F85E63",
                    700: "#FF7E75",
                    800: "#FF928B",
                    900: "#FFA69E",
                },
                color2: {
                    100: "#221612",
                    200: "#442d24",
                    300: "#664337",
                    400: "#885a49",
                    500: "#aa705b",
                    600: "#bb8d7c",
                    700: "#cca99d",
                    800: "#ddc6bd",
                    900: "#eee2de",
                },
                color3: {
                    100: "#120f14",
                    200: "#231d29",
                    300: "#352c3d",
                    400: "#463a52",
                    500: "#584966",
                    600: "#796d85",
                    700: "#9b92a3",
                    800: "#bcb6c2",
                    900: "#dedbe0",
                },
                color4: {
                    100: "#301231",
                    200: "#602462",
                    300: "#8f3693",
                    400: "#bf48c4",
                    500: "#ef5af5",
                    600: "#f27bf7",
                    700: "#f59cf9",
                    800: "#f9bdfb",
                    900: "#fcdefd",
                },
                color5: {
                    100: "#001e1b",
                    200: "#003c36",
                    300: "#005a52",
                    400: "#00786d",
                    500: "#009688",
                    600: "#33aba0",
                    700: "#66c0b8",
                    800: "#99d5cf",
                    900: "#cceae7",
                }
            },
            tertiary: {
                color0: {
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
                color1: {
                    100: "#692B00",
                    200: "#7F3D00",
                    300: "#94500D",
                    400: "#AA6319",
                    500: "#BA7929",
                    600: "#C68E3B",
                    700: "#D3A450",
                    800: "#E0BB66",
                    900: "#EDD382",
                },
                color2: {
                    100: "#1d1a0b",
                    200: "#3a3415",
                    300: "#574e20",
                    400: "#74682a",
                    500: "#918235",
                    600: "#a79b5d",
                    700: "#bdb486",
                    800: "#d3cdae",
                    900: "#e9e6d7",
                },
                color3: {
                    100: "#131910",
                    200: "#263120",
                    300: "#3a4a31",
                    400: "#4d6241",
                    500: "#607b51",
                    600: "#809574",
                    700: "#a0b097",
                    800: "#bfcab9",
                    900: "#dfe5dc",
                },
                color4: {
                    100: "#002a0b",
                    200: "#005316",
                    300: "#007d21",
                    400: "#00a62c",
                    500: "#00d037",
                    600: "#33d95f",
                    700: "#66e387",
                    800: "#99ecaf",
                    900: "#ccf6d7",
                },
                color5: {
                    100: "#331107",
                    200: "#66230e",
                    300: "#993414",
                    400: "#cc461b",
                    500: "#ff5722",
                    600: "#ff794e",
                    700: "#ff9a7a",
                    800: "#ffbca7",
                    900: "#ffddd3",
                }
            },
            accentOne: {
                color0: {
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
                color1: {
                    100: "#002D10",
                    200: "#005324",
                    300: "#007939",
                    400: "#009F4D",
                    500: "#0BD761",
                    600: "#23ED82",
                    700: "#4BF29B",
                    800: "#77F7B5",
                    900: "#A5FECB",
                },
                color2: {
                    100: "#051633",
                    200: "#0a2c66",
                    300: "#0f4199",
                    400: "#1457cc",
                    500: "#196dff",
                    600: "#478aff",
                    700: "#75a7ff",
                    800: "#a3c5ff",
                    900: "#d1e2ff",
                },
                color3: {
                    100: "#2e0d0f",
                    200: "#5d1a1e",
                    300: "#8b272c",
                    400: "#ba343b",
                    500: "#e8414a",
                    600: "#ed676e",
                    700: "#f18d92",
                    800: "#f6b3b7",
                    900: "#fad9db",
                },
                color4: {
                    100: "#2a2c00",
                    200: "#555800",
                    300: "#7f8400",
                    400: "#aab000",
                    500: "#d4dc00",
                    600: "#dde333",
                    700: "#e5ea66",
                    800: "#eef199",
                    900: "#f6f8cc",
                },
                color5: {
                    100: "#0f2310",
                    200: "#1e4620",
                    300: "#2e6930",
                    400: "#3d8c40",
                    500: "#4caf50",
                    600: "#70bf73",
                    700: "#94cf96",
                    800: "#b7dfb9",
                    900: "#dbefdc",
                }
              
            },
            accentTwo: {
                color0: {
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
                color1: {
                    100: "#003231",
                    200: "#084443",
                    300: "#175655",
                    400: "#276868",
                    500: "#377A7A",
                    600: "#498D8D",
                    700: "#5B9F9F",
                    800: "#6EB2B1",
                    900: "#82C4C3",
                },
                color2: {
                    100: "#331805",
                    200: "#66300a",
                    300: "#99490f",
                    400: "#cc6114",
                    500: "#ff7919",
                    600: "#ff9447",
                    700: "#ffaf75",
                    800: "#ffc9a3",
                    900: "#ffe4d1",
                },
                color3: {
                    100: "#080e1f",
                    200: "#101c3d",
                    300: "#192b5c",
                    400: "#21397a",
                    500: "#294799",
                    600: "#546cad",
                    700: "#7f91c2",
                    800: "#a9b5d6",
                    900: "#d4daeb",
                },
                color4: {
                    100: "#33141a",
                    200: "#662933",
                    300: "#993d4d",
                    400: "#cc5266",
                    500: "#ff6680",
                    600: "#ff8599",
                    700: "#ffa3b3",
                    800: "#ffc2cc",
                    900: "#ffe0e6",
                },
                color5: {
                    100: "#150c25",
                    200: "#291749",
                    300: "#3e236e",
                    400: "#522e92",
                    500: "#673ab7",
                    600: "#8561c5",
                    700: "#a489d4",
                    800: "#c2b0e2",
                    900: "#e1d8f1",
                }
            }
        }
    }
];
// Color design tokens
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? { 
            primary: colorPalettes[0].dark.primary.color0,
            secondary: colorPalettes[0].dark.secondary.color0,
            tertiary: colorPalettes[0].dark.tertiary.color0,
            accentOne: colorPalettes[0].dark.accentOne.color0,
            accentTwo: colorPalettes[0].dark.accentTwo.color0,
          }
        : {
            primary: colorPalettes[0].light.primary.color0,
            secondary: colorPalettes[0].light.secondary.color0,
            tertiary: colorPalettes[0].light.tertiary.color0,
            accentOne: colorPalettes[0].light.accentOne.color0,
            accentTwo: colorPalettes[0].light.accentTwo.color0,
            
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
                          main: colors.secondary[500],
                      },
                      neutral: {
                          dark: colors.secondary[700],
                          main: colors.secondary[500],
                          light: colors.secondary[100],
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
                          main: colors.tertiary[500],
                      },
                      neutral: {
                          dark: colors.secondary[700],
                          main: colors.secondary[500],
                          light: colors.secondary[100],
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




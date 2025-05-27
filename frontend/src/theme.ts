// import { PaletteMode, ThemeOptions } from "@mui/material";

// // color design tokens export
// export const tokensDark = {
//   grey: {
//     0: "#ffffff",
//     10: "#f6f6f6",
//     50: "#f0f0f0",
//     100: "#e0e0e0",
//     200: "#c2c2c2",
//     300: "#a3a3a3",
//     400: "#858585",
//     500: "#666666",
//     600: "#525252",
//     700: "#3d3d3d",
//     800: "#292929",
//     900: "#141414",
//     1000: "#000000",
//   },
//   primary: {
//     100: "#d3d4de",
//     200: "#a6a9be",
//     300: "#7a7f9d",
//     400: "#4d547d",
//     500: "#21295c",
//     600: "#191F45",
//     700: "#141937",
//     800: "#0d1025",
//     900: "#070812",
//   },
//   secondary: {
//     50: "#f0f0f0",
//     100: "#fff6e0",
//     200: "#ffedc2",
//     300: "#ffe3a3",
//     400: "#ffda85",
//     500: "#ffd166",
//     600: "#cca752",
//     700: "#997d3d",
//     800: "#665429",
//     900: "#332a14",
//   },
// } as const;

// type ColorShades = Record<string, string>;
// type Tokens = {
//   grey: ColorShades;
//   primary: ColorShades;
//   secondary: ColorShades;
// };

// // function that reverses the color palette
// function reverseTokens(tokens: Tokens): Tokens {
//   const reversedTokens: Tokens = {
//     grey: {},
//     primary: {},
//     secondary: {},
//   };

//   (Object.keys(tokens) as Array<keyof Tokens>).forEach((category) => {
//     const shades = tokens[category];
//     const keys = Object.keys(shades);
//     const values = Object.values(shades);
//     const length = keys.length;

//     const reversedShades: ColorShades = {};
//     for (let i = 0; i < length; i++) {
//       reversedShades[keys[i]] = values[length - i - 1];
//     }
//     reversedTokens[category] = reversedShades;
//   });

//   return reversedTokens;
// }

// export const tokensLight = reverseTokens(tokensDark);

// // primero extiende el Theme para que acepte "neutral"
// declare module "@mui/material/styles" {
//   interface Palette {
//     neutral: Palette["primary"];
//   }
//   interface PaletteOptions {
//     neutral?: PaletteOptions["primary"];
//   }
// }
// declare module "@mui/material/styles" {
//   interface TypeBackground {
//     alt: string;
//   }
// }
// // mui theme settings
// export const themeSettings = (mode: PaletteMode): ThemeOptions => {
//   const isDarkMode = mode === "dark";

//   return {
//     palette: {
//       mode,
//       primary: {
//         ...(isDarkMode ? tokensDark.primary : tokensLight.primary),
//         main: isDarkMode ? tokensDark.primary[400] : tokensDark.grey[50],
//         light: isDarkMode ? tokensDark.primary[400] : tokensDark.grey[100],
//       },
//       secondary: {
//         ...(isDarkMode ? tokensDark.secondary : tokensLight.secondary),
//         main: isDarkMode ? tokensDark.secondary[300] : tokensDark.secondary[600],
//         light: isDarkMode ? undefined : tokensDark.secondary[700],
//       },
//       neutral: {
//         ...(isDarkMode ? tokensDark.grey : tokensLight.grey),
//         main: tokensDark.grey[500],
//       },
//       background: {
//         default: isDarkMode ? tokensDark.primary[600] : tokensDark.grey[0],
//         alt: isDarkMode ? tokensDark.primary[500] : tokensDark.grey[50],
//       },
//     },
//     typography: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 12,
//       h1: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 40,
//       },
//       h2: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 32,
//       },
//       h3: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 24,
//       },
//       h4: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 20,
//       },
//       h5: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 16,
//       },
//       h6: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 14,
//       },
//     },
//   };
// };

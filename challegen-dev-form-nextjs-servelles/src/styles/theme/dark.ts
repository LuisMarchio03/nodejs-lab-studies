import { theme } from "@chakra-ui/theme";

const customTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: ".313rem",
    md: ".5rem",
  },
  fontSizes: {
    ...theme.fontSizes,
    "2xl": "3.375rem",
  },
  colors: {
    ...theme.colors,
    white: "#ffffff",
    purple: {
      ...theme.colors.purple,
      500: "#8257e6",
    },
    gray: {
      ...theme.colors.gray,
      100: "#dadada",
      700: "#202024",
      800: "#121214",
    },
  },
};

export default customTheme;

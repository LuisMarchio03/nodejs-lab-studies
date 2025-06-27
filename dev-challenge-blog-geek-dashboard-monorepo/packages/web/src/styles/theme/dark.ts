import { theme } from "@chakra-ui/theme";

const customTheme = {
  ...theme,
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Lexend Deca, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 600,
  },
  radii: {
    ...theme.radii,
    sm: "1.1rem",
    md: "2.0rem",
    "2xl": "2.4rem",
    lg: "4.8rem",
  },
  fontSizes: {
    ...theme.fontSizes,
    sm: "1.5rem",
    md: "2.0rem",
    "2xl": "2.4rem",
    lg: "3.8rem",
  },
  colors: {
    ...theme.colors,
    white: "#FEFBFB",
    purple: {
      ...theme.colors.purple,
      500: "#8257E6",
    },
    blue: {
      ...theme.colors.blue,
      900: "#13131F",
    },
    gray: {
      ...theme.colors.gray,
      200: "#C4C4C4",
      700: "#282830",
    },
  },
};

export default customTheme;

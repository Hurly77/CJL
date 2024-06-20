import { ConfigTheme, LayoutTheme, ThemeColors, BaseColors } from "@nextui-org/react";

const baseColors: BaseColors = {
  divider: {},
  overlay: {},
  foreground: {},
  focus: {},
  background: {
    DEFAULT: "#f0f0f0",
  },
};

const Colors: ThemeColors = {
  primary: {
    DEFAULT: "#0070f3",
  },
  secondary: {
    DEFAULT: "#f81ce5",
  },
  success: {
    DEFAULT: "#28a745",
  },
  warning: {
    DEFAULT: "#ff9800",
  },
  danger: {
    DEFAULT: "#dc3545",
  },
  default: {
    DEFAULT: "#333",
  },
};

export const defaultTheme: ConfigTheme = {
  extend: "light",
  colors: Colors,
};

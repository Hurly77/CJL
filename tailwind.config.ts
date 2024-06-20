import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-primary-*/,
    },
    {
      pattern: /bg-default-*/,
    },
    {
      pattern: /bg-secondary-*/,
    },
    {
      pattern: /bg-danger-*/,
    },
    {
      pattern: /bg-warning-*/,
    },
    {
      pattern: /bg-success-*/,
    },
  ],
  theme: {},
  plugins: [
    nextui({
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.5,
        fontSize: {
          tiny: "0.875rem",
          small: "1rem", // text-small
          medium: "1.125rem", // text-medium
          large: "1.2rem", // text-large
        },
        lineHeight: {
          tiny: ".75rem", // text-tiny
          small: "1rem", // text-small
          medium: "1.25rem", // text-medium
          large: "1.5rem", // text-large
        },
        radius: {
          small: "4px",
          medium: "4px",
          large: "4px",
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
      },
      themes: {
        light: {},
        dark: {
          colors: {
            background: "#1f1f29",
            content1: "#2D2D37",
            content2: "#3B3B44",
            content3: "#57575F",
            content4: "#8F8F94",
            foreground: {
              DEFAULT: "#ffffff",
              50: "#C7C7CA",
              100: "#EBEBEB",
              200: "#DADADA",
              300: "#C9C9C9",
              400: "#ADADAD",
              500: "#919191",
              600: "#858585",
              700: "#6B6B6B",
              800: "#515151",
              900: "#3B3B3B",
            },
            primary: {
              DEFAULT: "#f06d4f",
              "50": "#fffcf7",
              "100": "#fcf4eb",
              "200": "#fce6d2",
              "300": "#fad4b6",
              "400": "#f5a482",
              "500": "#f06d4f",
              "600": "#d95a41",
              "700": "#b3432d",
              "800": "#8f2e1d",
              "900": "#6b1c10",
            },
            secondary: {
              DEFAULT: "#06327d",
              "50": "#ebf3f7",
              "100": "#dcebf2",
              "200": "#a9c9de",
              "300": "#7ea9cc",
              "400": "#376aa3",
              "500": "#06327d",
              "600": "#062b70",
              "700": "#04205e",
              "800": "#02184a",
              "900": "#011038",
            },
            success: {
              DEFAULT: "#209d5c",
              "50": "#f0faf7",
              "100": "#e1f5ef",
              "200": "#bae8d9",
              "300": "#93d9bf",
              "400": "#52ba8d",
              "500": "#209d5c",
              "600": "#1a8f50",
              "700": "#12753b",
              "800": "#0b5e2b",
              "900": "#06471d",
            },
            warning: {
              DEFAULT: "#ff9800",
            },
            danger: {
              DEFAULT: "#dc3545",
            },
            default: {},
          },
        },
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;

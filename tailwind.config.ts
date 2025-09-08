import { heroui } from "@heroui/theme";

const config = {
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
  theme: {
    extend: {
      backgroundImage: {
        "image-home": "url('/images/backgrounds/space-bg-2.png')",
        "image-projects": "url('/images/backgrounds/space-bg-3.png')",
        "image-resume": "url('/images/backgrounds/space-bg-4.png')",
      },
    },
  },
};
export default config;

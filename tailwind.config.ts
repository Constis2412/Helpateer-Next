import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-white": "#dee3e3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1000px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "cmyk",
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          ".shadow-2xl": {
            "--tw-shadow": " 0 25px 50px -12px rgb(255 255 255/ 0.25);",
          },
          ".shadow-inner": {
            "--tw-shadow": "inset 0 2px 4px 0 rgb(255 255 255/ 0.05);",
          },
        },
      },
    ],
  },
  darkMode: "class",
};
export default config;

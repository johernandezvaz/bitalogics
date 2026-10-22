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
        white: "#FFFFFF",
        paper: {
          DEFAULT: "#F4F6F9",
          warm: "#EFF2F6",
        },
        deep: "#0E1B2E",
        frost: "rgba(255,255,255,0.80)",
        ink: "#16283F",
        body: "#3B4A5C",
        soft: "#546273",
        placeholder: "#6B7685",
        "soft-on-dark": "#A9B4C4",
        blue: {
          DEFAULT: "#2E86C1",
          dark: "#1B5A85",
        },
        gold: "#C98A3E",
        line: "rgba(22,40,63,0.12)",
        "input-border": "#8A94A3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        md: "720px",
      },
    },
  },
  plugins: [],
};
export default config;

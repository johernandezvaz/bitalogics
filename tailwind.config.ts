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
        ink: "#16283F",
        deep: "#0E1B2E",
        blue: {
          DEFAULT: "#2E86C1",
          dark: "#1B5A85",
        },
        gold: "#C98A3E",
        paper: {
          DEFAULT: "#F4F6F9",
          warm: "#EFF2F6",
        },
        line: "rgba(22,40,63,0.12)",
        "text-soft": "rgba(22,40,63,0.62)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
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

import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
        "light-purple": "#EFEBFF",
        "dark-grey": "#333333",
        grey: "#737373",
        borders: "#D9D9D9",
        "light-grey": "#FAFAFA",
        red: "#FF3939",
      },
      boxShadow: {
        "purple-light": "0 0 16px 8px #633CFF30",
      },
    },
    fontFamily: {
      "instrument-sans": ["Instrument Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

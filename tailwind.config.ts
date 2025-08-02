import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2419be",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        deepb: "#094FA4",
        oceanb: "#009EE5",
        waterb: "#52BCEC",
        skyb: "#B5E5F9",
        redbutton: "#EA6060",
        greyc: "#CCCCCC",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
